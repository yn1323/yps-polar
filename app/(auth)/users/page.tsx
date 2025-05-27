import { Animation } from '@/src/components/templates/Animation';
import { Center, Heading } from '@chakra-ui/react';

export default function UsersPage() {
  return (
    <Animation>
      <Center h="100vh">
        <Heading>ユーザー管理</Heading>
      </Center>
    </Animation>
  );
}