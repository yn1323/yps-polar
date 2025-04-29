import { Box, Button, Card, Field, Input, Link, Stack } from '@chakra-ui/react';

export const SignupForm = () => {
  return (
    <Card.Root w="96" p="8">
      <Stack gap="8" w="full">
        <Stack gap="6" as="form">
          <Field.Root>
            <Field.Label>メールアドレス</Field.Label>
            <Input id="mail" />
          </Field.Root>
          <Field.Root>
            <Field.Label>パスワード</Field.Label>
            <Input id="password" type="password" />
          </Field.Root>
          <Field.Root>
            <Field.Label>パスワード(確認)</Field.Label>
            <Input id="passwordConfirmation" type="password" />
          </Field.Root>
          <Button variant="solid" colorPalette="teal" type="submit">
            登録
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
            <Link href="/signin" _hover={{ textDecoration: 'underline' }}>
              ログイン画面に戻る
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Card.Root>
  );
};
