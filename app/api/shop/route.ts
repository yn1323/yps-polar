import type { Prisma } from '@/prisma/generated';
import prisma from '@/src/configs/prisma/prisma';
import type { BaseFetch } from '@/src/services/common/serverFetch';
import type { NextRequest } from 'next/server';

export type PostShop = BaseFetch & {
  response: CommonResponse<Prisma.ShopCreateArgs['data']>;
  mutation: Prisma.ShopCreateInput;
  method: 'POST';
};

const PostApiName = 'PostShop';
export const POST = async (request: NextRequest) => {
  const data: PostShop['mutation'] = await request.json();
  console.log(`${PostApiName} Started`, data);

  const result = await prisma.shop
    .create({
      data,
    })
    .catch((e) => {
      console.error(e);
      console.error(`${PostApiName} Failed`);
    });

  console.log(`${PostApiName} Ended`, result);

  return Response.json({
    success: !!result,
    result,
  });
};
