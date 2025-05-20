'use server';

import { prisma } from '@/src/configs/prisma/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import type { SchemaType } from './schema';

export const registerShop = async (ownerUserId: string, data: SchemaType) => {
  try {
    // create shop
    const shop = await prisma.shop.create({
      data: {
        shopName: data.shopName,
        openTime: data.openTime,
        closeTime: data.closeTime,
        timeUnit: 15,
        submitFrequency: data.submitFrequency,
        avatar: '',
        useTimeCard: false,
      },
    });

    // link owner user to shop via ShopUserBelonging
    await prisma.shopUserBelonging.create({
      data: {
        shopId: shop.id,
        userId: ownerUserId,
      },
    });

    revalidatePath('/');
    return { success: true } as const;
  } catch (error) {
    console.error('registerShop error', error);
    return { success: false, message: 'Shop登録に失敗しました' } as const;
  }
};

export const successRedirect = () => {
  redirect('/dashboard');
};
