'use server';

import { revalidatePath } from 'next/cache';

import type { SchemaType } from '@/src/components/features/signin/SigninForm/schema';
import { createClient } from '@/src/helpers/auth/server';

export async function login({ email, password }: SchemaType) {
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
}
