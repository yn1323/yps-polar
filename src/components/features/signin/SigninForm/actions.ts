'use server';

import { revalidatePath } from 'next/cache';

import type { SchemaType } from '@/src/components/features/signin/SigninForm/schema';
import { AUTH_ERROR_MESSAGES, AUTH_ERROR_TYPES } from '@/src/constants/auth';
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
    
    if (authError === AUTH_ERROR_TYPES.AUTH_FAILED) {
      return { 
        success: false, 
        error: AUTH_ERROR_MESSAGES.GOOGLE_AUTH_FAILED
      };
    }
    if (authError) {
      return { 
        success: false, 
        error: AUTH_ERROR_MESSAGES.GENERAL_AUTH_ERROR
      };
    }
  }

  const supabase = await createClient();
  const baseUrl = await createBaseUrl();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${baseUrl}/auth/callback`,
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

  return { success: false, error: AUTH_ERROR_MESSAGES.OAUTH_URL_NOT_GENERATED };
};

