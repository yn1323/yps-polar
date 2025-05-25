import prisma from '@/src/configs/prisma/prisma';

export const createTestUser = async (userId: string, userName: string) => {
  try {
    await prisma.user.create({
      data: {
        userId,
        userName,
      },
    });
    console.log(`Test user created: ${userId}`);
  } catch (error) {
    console.log(`User already exists or error creating: ${userId}`, error);
  }
};

export const deleteTestUser = async (userId: string) => {
  try {
    await prisma.user.delete({
      where: {
        userId,
      },
    });
    console.log(`Test user deleted: ${userId}`);
  } catch (error) {
    console.log(`User not found or error deleting: ${userId}`, error);
  }
};

export const checkUserExists = async (userId: string): Promise<boolean> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        userId,
      },
    });
    return !!user;
  } catch (error) {
    console.log(`Error checking user existence: ${userId}`, error);
    return false;
  }
};

export const disconnectDatabase = async () => {
  await prisma.$disconnect();
};
