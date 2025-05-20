'use client';

import { toaster } from '@/src/components/ui/toaster';
import { createClient } from '@/src/helpers/auth/client';
import { Button, Card, Field, Input, Stack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { registerUser, successRedirect } from './actions';
import { type SchemaType, schema } from './schema';

export const UserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      toaster.create({ description: 'ログインが必要です', type: 'error' });
      return;
    }

    const result = await registerUser(user.id, data);
    if (result.success) {
      toaster.create({ description: 'ユーザー登録しました', type: 'success' });
      successRedirect();
    } else {
      toaster.create({ description: result.message, type: 'error' });
    }
  };

  return (
    <Card.Root w="96" p="8">
      <Stack gap="8" w="full">
        <Text fontSize="lg">ユーザー登録</Text>
        <Stack
          gap="6"
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
          <Field.Root invalid={!!errors.userName}>
            <Field.Label>ユーザー名</Field.Label>
            <Input {...register('userName')} placeholder="ユーザー名" />
            <Field.ErrorText>{errors.userName?.message}</Field.ErrorText>
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
      </Stack>
    </Card.Root>
  );
};
