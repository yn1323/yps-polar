import { getEnv } from '@/src/helpers/utils/env';
import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';
import { SupabaseSafeSession } from './safe-session';

export async function updateSessionFast(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  // 静的ファイルの早期リターン
  if (
    request.nextUrl.pathname.endsWith('.svg') ||
    request.nextUrl.pathname.endsWith('.png') ||
    request.nextUrl.pathname.endsWith('.jpg') ||
    request.nextUrl.pathname.endsWith('.jpeg') ||
    request.nextUrl.pathname.endsWith('.gif') ||
    request.nextUrl.pathname.endsWith('.webp')
  ) {
    return supabaseResponse;
  }

  const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = getEnv();

  const supabase = createServerClient(
    NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // 認証なしページ
  const publicPaths = ['/'];
  // 認証操作ページ
  const authOperationPaths = ['/signin', '/signin/signup', '/signin/forget'];
  const isApi = request.nextUrl.pathname.startsWith('/api');

  // API は認証が必要
  if (isApi) {
    return supabaseResponse;
  }

  // 認証なしページは早期リターン（認証チェックをスキップ）
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return supabaseResponse;
  }

  // JWT秘密鍵の確認
  const jwtSecret = process.env.SUPABASE_JWT_SECRET;
  if (!jwtSecret) {
    console.warn('SUPABASE_JWT_SECRET not found, falling back to getUser()');
    // フォールバック: 通常の認証
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return handleAuthFlow(request, supabaseResponse, supabase, user);
  }

  // Safe Sessionを使った高速認証
  const safeSession = new SupabaseSafeSession(supabase, jwtSecret);
  const { user, error } = await safeSession.getUser();

  // JWT検証が失敗した場合のフォールバック
  if (error && !authOperationPaths.includes(request.nextUrl.pathname)) {
    console.warn(
      'JWT verification failed, falling back to getUser():',
      error.message,
    );
    const { user: fallbackUser } = await safeSession.getUserFallback();
    return handleAuthFlow(request, supabaseResponse, supabase, fallbackUser);
  }

  return handleAuthFlow(request, supabaseResponse, supabase, user);
}

/**
 * 認証フローの共通処理
 */
async function handleAuthFlow(
  request: NextRequest,
  supabaseResponse: NextResponse,
  supabase: ReturnType<typeof createServerClient>,
  user: { id: string } | null,
) {
  const authOperationPaths = ['/signin', '/signin/signup', '/signin/forget'];

  // 認証なし + 認証操作ページを見ようとしている
  if (!user && authOperationPaths.includes(request.nextUrl.pathname)) {
    return supabaseResponse;
  }

  // 認証あり + 認証操作なしページを見ようとしている
  if (user && authOperationPaths.includes(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // 認証なし + 認証必要ページを見ようとしている
  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  // =============================
  // 初回ログインユーザー判定（高速化版）
  // =============================
  if (user) {
    const USER_REGISTERED_COOKIE = 'user_registered';
    const AUTH_CACHE_COOKIE = 'auth_cache';
    const isUserConfigPath =
      request.nextUrl.pathname.startsWith('/config/user');

    // 認証キャッシュをチェック
    const authCache = request.cookies.get(AUTH_CACHE_COOKIE);
    const isRegisteredCookie = request.cookies.get(USER_REGISTERED_COOKIE);

    // キャッシュされた認証情報があり、ユーザーIDが一致する場合
    if (authCache?.value === user.id && isRegisteredCookie?.value === 'true') {
      // DBアクセスをスキップ
      return supabaseResponse;
    }

    let alreadyRegistered = false;

    if (isRegisteredCookie?.value === 'true') {
      alreadyRegistered = true;
    } else {
      // 初回のみDB確認
      const { data: registeredUser, error } = await supabase
        .from('User')
        .select('userId, userName')
        .eq('userId', user.id)
        .maybeSingle();

      if (error) {
        console.error('Database error:', error);
      }

      alreadyRegistered = !error && !!registeredUser;

      // 結果をCookieに保存
      if (alreadyRegistered) {
        supabaseResponse.cookies.set(USER_REGISTERED_COOKIE, 'true', {
          maxAge: 60 * 60 * 2, // 2時間
          httpOnly: true,
          secure: true,
          sameSite: 'lax',
        });
      }
    }

    // 認証キャッシュを更新
    supabaseResponse.cookies.set(AUTH_CACHE_COOKIE, user.id, {
      maxAge: 60 * 30, // 30分
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
    });

    // 未登録ユーザーが /config 以外へアクセスしようとしたら /config へリダイレクト
    if (!alreadyRegistered && !isUserConfigPath) {
      const url = request.nextUrl.clone();
      url.pathname = '/config/user';
      return NextResponse.redirect(url);
    }
  }

  return supabaseResponse;
}
