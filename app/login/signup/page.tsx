import { Box, Center, Heading, Text } from '@chakra-ui/react';

export default function SignupPage() {
  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          新規登録ページ
        </Heading>
        <Text>ここに新規登録フォームが表示されます。</Text>
      </Box>
    </Center>
  );
}
