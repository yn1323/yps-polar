import { Box, Center, Heading, Text } from '@chakra-ui/react';

export default function ForgetPasswordPage() {
  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          パスワードをお忘れの方
        </Heading>
        <Text>ここにパスワードリセットフォームが表示されます。</Text>
      </Box>
    </Center>
  );
}
