'use server';

import { revalidatePath } from 'next/cache';

import type { SchemaType } from '@/src/components/features/signin/SigninForm/schema';
import { createClient } from '@/src/helpers/auth/server';
import { createBaseUrl } from '@/src/helpers/utils/url';

export const login = async ({ email, password }: SchemaType) => {
  const supabase = await createClient();

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  revalidatePath('/', 'layout');

  return {
    success: !error,
  };
};

export const signinWithGoogle = async () => {
  // URL paramsでエラーをチェック
  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const authError = urlParams.get('error');

    if (authError === 'auth_failed') {
      return {
        success: false,
        error: 'Google認証に失敗しました。再度お試しください。',
      };
    }
    if (authError) {
      return {
        success: false,
        error: '認証エラーが発生しました。',
      };
    }
  }

  const supabase = await createClient();
  const baseUrl = await createBaseUrl();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${baseUrl}/api/auth/callback`,
    },
  });

  if (error) {
    console.error('Google OAuth error:', error);
    return { success: false, error: error.message };
  }

  if (data?.url) {
    // OAuth URLにリダイレクト
    return { success: true, redirectUrl: data.url };
  }

  return { success: false, error: 'OAuth URL not generated' };
};
