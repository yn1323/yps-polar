import { getEnv } from '@/src/helpers/utils/env';
import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

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
  // Do not run code between createServerClient and
  // supabase.auth.getUser(). A simple mistake could make it very hard to debug
  // issues with users being randomly logged out.

  // IMPORTANT: DO NOT REMOVE auth.getUser()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 認証なしページ
  const publicPaths = ['/'];

  // 認証操作ページ
  const authOperationPaths = ['/signin', '/signin/signup', '/signin/forget'];

  // 認証が必要ページ（上記以外すべてが該当）
  // const authPaths = ['/dashboard'];

  // 認証なしで認証なしページを見ようとしている
  if (publicPaths.includes(request.nextUrl.pathname)) {
    return supabaseResponse;
  }

  // 認証なし + 認証操作ページを見ようとしている
  if (!user && authOperationPaths.includes(request.nextUrl.pathname)) {
    return supabaseResponse;
  }

  // 認証あり + 認証操作なページを見ようとしている
  if (user && authOperationPaths.includes(request.nextUrl.pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = '/dashboard';
    return NextResponse.redirect(url);
  }

  // 認証なし  + 認証必要ページを見ようとしている
  if (!user) {
    const url = request.nextUrl.clone();
    url.pathname = '/signin';
    return NextResponse.redirect(url);
  }

  // 認証あり  + 認証必要ページを見ようとしている
  return supabaseResponse;
}
