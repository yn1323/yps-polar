import { Animation } from '@/src/components/templates/Animation';
import { serverAuth } from '@/src/helpers/auth/auth';
import { Center } from '@chakra-ui/react';
import { ConfigClient } from './client-components';

export default async function Page() {
  const { getUser } = serverAuth();
  const user = await getUser();

  return (
    <Animation>
      <Center h="100vh" flexDir="column" gap="4">
        <ConfigClient userId={user.data.user?.id ?? ''} />
      </Center>
    </Animation>
  );
}
