'use server';

import { revalidatePath } from 'next/cache';

import type { SchemaType } from '@/src/components/features/signin/SigninForm/schema';
import { createClient } from '@/src/helpers/auth/server';

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
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
  });

  revalidatePath('/', 'layout');

  return {
    success: !error,
  };
};
