'use client';

import { Box, Button, Card, Field, Input, Link, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type SchemaType, schema } from './schema';

export const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    // wait 3 seconds
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  };

  return (
    <Card.Root w="96" p="8">
      <Stack gap="8" w="full">
        <Stack
          gap="6"
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
          <Field.Root invalid={!!errors.mail}>
            <Field.Label>メールアドレス</Field.Label>
            <Input
              {...register('mail')}
              placeholder="メールアドレスを入力してください"
              disabled={isSubmitting}
            />
            <Field.ErrorText>{errors.mail?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label>パスワード</Field.Label>
            <Input
              {...register('password')}
              type="password"
              placeholder="パスワードを入力してください"
              disabled={isSubmitting}
            />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.passwordConfirmation}>
            <Field.Label>パスワード(確認)</Field.Label>
            <Input
              {...register('passwordConfirmation')}
              type="password"
              placeholder="パスワードを入力してください（確認用）"
              disabled={isSubmitting}
            />
            <Field.ErrorText>
              {errors.passwordConfirmation?.message}
            </Field.ErrorText>
          </Field.Root>

          <Button
            variant="solid"
            colorPalette="teal"
            type="submit"
            loading={isSubmitting}
          >
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
