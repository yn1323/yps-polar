'use client';

import { signup } from '@/src/components/features/signin/SignupForm/actions';
import { toaster } from '@/src/components/ui/toaster';
import { Box, Button, Card, Field, Input, Link, Stack } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
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
    const { success } = await signup(data);
    if (success) {
      toaster.create({
        description: 'ユーザー登録が完了しました',
        type: 'success',
      });
      redirect('/signin');
    } else {
      toaster.create({
        description: 'ユーザー登録に失敗しました',
        type: 'error',
      });
    }
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
          <Field.Root invalid={!!errors.email}>
            <Field.Label>メールアドレス</Field.Label>
            <Input
              {...register('email')}
              placeholder="メールアドレスを入力してください"
              disabled={isSubmitting}
            />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
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
