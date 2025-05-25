import { restoreSupabaseGrants } from '@/prisma/seeds/config/grant';

async function main() {
  try {
    // 1. Supabaseの権限を復旧
    await restoreSupabaseGrants();

    console.log('🎉 Seed completed successfully!');
  } catch (error) {
    console.error('❌ Seed failed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // await prisma.$disconnect();
  });
