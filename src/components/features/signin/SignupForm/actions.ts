'use server';

import { revalidatePath } from 'next/cache';

import type { SchemaType } from '@/src/components/features/signin/SignupForm/schema';
import { createClient } from '@/src/helpers/auth/server';

export async function signup({
  email,
  password,
  passwordConfirmation,
}: SchemaType) {
  const supabase = await createClient();

  if (password !== passwordConfirmation) {
    return {
      success: false,
    };
  }

  const data = {
    email,
    password,
  };

  const { error } = await supabase.auth.signUp(data);

  revalidatePath('/', 'layout');

  return {
    success: !error,
  };
}
