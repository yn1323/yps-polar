import { Button, Card, Field, Input, Link, Stack } from '@chakra-ui/react';

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
          <Link href="/signin" _hover={{ textDecoration: 'underline' }}>
            ログイン画面に戻る
          </Link>
        </Stack>
      </Stack>
    </Card.Root>
  );
};
