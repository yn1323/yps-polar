import type { Prisma } from '@/prisma/generated';
import prisma from '@/src/configs/prisma/prisma';
import type { BaseFetch } from '@/src/services/common/serverFetch';
import type { NextRequest } from 'next/server';

type Path = {
  params: {
    userId: string;
  };
};

export type GetAuthUser = BaseFetch & {
  response: CommonResponse<Prisma.UserCreateArgs['data']>;
};

const GetApiName = 'GetAuthUser';
export const GET = async (_: NextRequest, path: Path) => {
  const { userId } = await path.params;

  console.log(`${GetApiName} Started`, userId);

  const result = await prisma.user
    .findUnique({
      where: {
        userId,
      },
    })
    .catch((e) => {
      console.error(e);
      console.error(`${GetApiName} Failed`);
    });

  console.log(`${GetApiName} Ended`, result);

  return Response.json({
    success: !!result,
    result,
  });
};

export type PostAuthUser = BaseFetch & {
  response: CommonResponse<Prisma.UserCreateArgs['data']>;
  mutation: Prisma.UserCreateInput;
  method: 'POST';
};

const PostApiName = 'PostAuthUser';
export const POST = async (request: NextRequest) => {
  const data: PostAuthUser['mutation'] = await request.json();
  console.log(`${PostApiName} Started`, data);

  const result = await prisma.user
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
