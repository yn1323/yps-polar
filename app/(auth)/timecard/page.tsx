import { Animation } from '@/src/components/templates/Animation';
import { Center, Heading } from '@chakra-ui/react';

export default function TimeCardPage() {
  return (
    <Animation>
      <Center h="100vh">
        <Heading>タイムカード</Heading>
      </Center>
    </Animation>
  );
}