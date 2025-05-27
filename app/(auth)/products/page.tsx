import { Animation } from '@/src/components/templates/Animation';
import { Center, Heading } from '@chakra-ui/react';

export default function ProductsPage() {
  return (
    <Animation>
      <Center h="100vh">
        <Heading>商品管理</Heading>
      </Center>
    </Animation>
  );
}