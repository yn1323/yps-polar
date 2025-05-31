'use client';
import { login } from '@/src/components/features/signin/SigninForm/actions';
import { toaster } from '@/src/components/ui/toaster';
import {
  Box,
  Button,
  Card,
  Link as ChakraLink,
  Field,
  Input,
  Stack,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type SchemaType, schema } from './schema';

export const SigninForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const signinCallback = (success: boolean) => {
    if (success) {
      toaster.create({
        description: 'ログインに成功しました',
        type: 'success',
      });
      redirect('/mypage');
    } else {
      toaster.create({
        description: 'ログインに失敗しました',
        type: 'error',
      });
    }
  };

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const { success } = await login(data);
    signinCallback(success);
  };

  // const onClickGoogleSignin = async () => {
  //   const result = await signinWithGoogle();

  //   if (result.success && result.redirectUrl) {
  //     // Google OAuth URLにリダイレクト
  //     window.location.href = result.redirectUrl;
  //   } else {
  //     toaster.create({
  //       description: result.error || 'Google認証の開始に失敗しました',
  //       type: 'error',
  //     });
  //   }
  // };

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
          <Button
            variant="solid"
            colorPalette="teal"
            type="submit"
            loading={isSubmitting}
          >
            メールアドレスでログイン
          </Button>
        </Stack>

        {/* Google認証は一時的に無効化 */}
        {/* <Flex alignItems="center" gap="6" mx="-2">
          <Box flex="1" h="1px" bg="gray.300" />
          <Text>or</Text>
          <Box flex="1" h="1px" bg="gray.300" />
        </Flex>

        <Button variant="outline" onClick={onClickGoogleSignin}>
          <Flex align="center" gap="2">
            <FcGoogle />
            <Text>Googleでログイン</Text>
          </Flex>
        </Button> */}

        <Stack
          w="full"
          gap="2"
          textAlign="right"
          color="gray.500"
          fontSize="sm"
        >
          <Box>
            <ChakraLink asChild _hover={{ textDecoration: 'underline' }}>
              <Link href="/signin/signup">新規登録</Link>
            </ChakraLink>
          </Box>
          <Box>
            <ChakraLink asChild _hover={{ textDecoration: 'underline' }}>
              <Link href="/signin/forget">パスワードを忘れた方</Link>
            </ChakraLink>
          </Box>
        </Stack>
      </Stack>
    </Card.Root>
  );
};
