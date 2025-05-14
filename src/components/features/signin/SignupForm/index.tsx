import { Box, Button, Card, Field, Input, Link, Stack } from '@chakra-ui/react';
import { useForm } from '@tanstack/react-form';
import { schema } from './schema';

export const SignupForm = () => {
  const form = useForm({
    validators: {
      onSubmit: schema,
    },
    defaultValues: {
      mail: '',
      password: '',
      passwordConfirmation: '',
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <Card.Root w="96" p="8">
      <Stack gap="8" w="full">
        <Stack
          gap="6"
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <form.Field
            name="mail"
            children={({ name, state, handleChange }) => {
              return (
                <Field.Root>
                  <Field.Label>メールアドレス</Field.Label>
                  <Input
                    name={name}
                    value={state.value}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="メールアドレスを入力してください"
                  />
                </Field.Root>
              );
            }}
          />
          <form.Field
            name="password"
            children={({ name, state, handleChange }) => {
              return (
                <Field.Root>
                  <Field.Label>パスワード</Field.Label>
                  <Input
                    name={name}
                    type="password"
                    value={state.value}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="パスワードを入力してください"
                  />
                </Field.Root>
              );
            }}
          />
          <form.Field
            name="passwordConfirmation"
            children={({ name, state, handleChange }) => {
              return (
                <Field.Root>
                  <Field.Label>パスワード(確認)</Field.Label>
                  <Input
                    name={name}
                    type="password"
                    value={state.value}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="パスワードを入力してください（確認用）"
                  />
                </Field.Root>
              );
            }}
          />
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
