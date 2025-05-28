import { Animation } from '@/src/components/templates/Animation';
import { Center, Heading } from '@chakra-ui/react';

export default function MyPage() {
  return (
    <Animation>
      <Center h="100vh">
        <Heading>マイページ</Heading>
      </Center>
    </Animation>
  );
}