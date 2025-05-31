import { createClient } from '@/src/helpers/auth/server';
import { getOriginFromRequest } from '@/src/helpers/utils/url';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const origin = getOriginFromRequest(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/mypage';

  if (code) {
    const supabase = await createClient();

    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // 認証成功時はマイページにリダイレクト
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // 認証失敗時はサインインページにリダイレクト
  return NextResponse.redirect(`${origin}/signin?error=auth_failed`);
}
