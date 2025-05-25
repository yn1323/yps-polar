import { Client } from 'pg';

// permission denied 回避
export async function restoreSupabaseGrants() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.error('❌ DATABASE_URL is required');
    process.exit(1);
  }

  const client = new Client({
    connectionString: connectionString,
  });

  try {
    await client.connect();
    console.log('🔧 Connected to Supabase Postgres, restoring grants...');

    const grantQueries = [
      'GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;',
      'GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;',
    ];

    for (const query of grantQueries) {
      try {
        await client.query(query);
        console.log(`✅ Executed: ${query.substring(0, 50)}...`);
      } catch (error) {
        console.warn(`⚠️  Failed: ${query.substring(0, 50)}...`, error);
      }
    }

    console.log('🎉 Grants restoration completed!');
  } catch (error) {
    console.error('❌ Connection failed:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}
