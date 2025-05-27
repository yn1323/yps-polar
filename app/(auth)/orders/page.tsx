import { Animation } from '@/src/components/templates/Animation';
import { Center, Heading } from '@chakra-ui/react';

export default function OrdersPage() {
  return (
    <Animation>
      <Center h="100vh">
        <Heading>注文管理</Heading>
      </Center>
    </Animation>
  );
}