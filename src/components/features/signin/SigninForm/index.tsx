'use client';

import {
  Box,
  Button,
  Card,
  Field,
  Flex,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { type SchemaType, schema } from './schema';

export const SigninForm = () => {
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
          <Button
            variant="solid"
            colorPalette="teal"
            type="submit"
            loading={isSubmitting}
          >
            メールアドレスでログイン
          </Button>
        </Stack>

        <Flex alignItems="center" gap="6" mx="-2">
          <Box flex="1" h="1px" bg="gray.300" />
          <Text>or</Text>
          <Box flex="1" h="1px" bg="gray.300" />
        </Flex>

        <Button variant="outline">
          <Flex align="center" gap="2">
            <FcGoogle />
            <Text>Googleでログイン</Text>
          </Flex>
        </Button>

        <Stack
          w="full"
          gap="2"
          textAlign="right"
          color="gray.500"
          fontSize="sm"
        >
          <Box>
            <Link
              href="/signin/signup"
              _hover={{ textDecoration: 'underline' }}
            >
              新規登録
            </Link>
          </Box>
          <Box>
            <Link
              href="/signin/forget"
              _hover={{ textDecoration: 'underline' }}
            >
              パスワードを忘れた方
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Card.Root>
  );
};
