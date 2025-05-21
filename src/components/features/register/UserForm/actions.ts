'use server';

import type { PostAuthUser } from '@/app/api/auth/user/[userId]/route';
import { prisma } from '@/src/configs/prisma/prisma';
import { serverFetch } from '@/src/services/common/serverFetch';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { SchemaType } from './schema';

export const registerUser = async (
  userId: string,
  { userName }: SchemaType,
) => {
  const result = await serverFetch<PostAuthUser>(`/api/auth/user/${userId}`, {
    method: 'POST',
    mutation: {
      userName,
    },
  });

  try {
    const exists = await prisma.user.findUnique({ where: { userId } });
    if (exists) {
      return { success: false, message: '既に登録済みです' } as const;
    }

    await prisma.user.create({
      data: {
        userId,
        userName,
        avatar: '',
      },
    });

    revalidatePath('/');

    return { success: true } as const;
  } catch (error) {
    console.error('registerUser error', error);
    return { success: false, message: 'エラーが発生しました' } as const;
  }
};

export const successRedirect = () => {
  redirect('/dashboard');
};
