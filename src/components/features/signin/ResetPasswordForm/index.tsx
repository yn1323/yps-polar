import {
  Box,
  Button,
  Card,
  Link as ChakraLink,
  Field,
  Input,
  Stack,
} from '@chakra-ui/react';
import Link from 'next/link';

export const ResetPasswordForm = () => {
  return (
    <Card.Root w="96" p="8">
      <Stack gap="8" w="full">
        <Stack gap="6" as="form">
          <Field.Root>
            <Field.Label>メールアドレス</Field.Label>
            <Input id="mail" />
          </Field.Root>
          <Button variant="solid" colorPalette="teal" type="submit">
            パスワードリセット
          </Button>
        </Stack>

        <Stack
          w="full"
          gap="2"
          textAlign="right"
          color="gray.500"
          fontSize="sm"
        >
          <Box>
            <ChakraLink asChild _hover={{ textDecoration: 'underline' }}>
              <Link href="/signin">ログイン画面に戻る</Link>
            </ChakraLink>
          </Box>
        </Stack>
      </Stack>
    </Card.Root>
  );
};
