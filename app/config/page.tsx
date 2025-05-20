import { Animation } from '@/src/components/templates/Animation';
import { createClient } from '@/src/helpers/auth/server';
import { Center } from '@chakra-ui/react';
import { redirect } from 'next/navigation';
import { ConfigClient } from './client-components';

export default async function Page() {
  const supabase = await createClient();

  // 認証ユーザーを取得
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // 認証情報が無ければログインへ
  if (!user) {
    redirect('/signin');
  }

  return (
    <Animation>
      <Center h="100vh" flexDir="column" gap="4">
        <ConfigClient user={user} />
      </Center>
    </Animation>
  );
}
