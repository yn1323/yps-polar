'use client';

import { Button, Card, Field, Input, Stack, Text } from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type SchemaType, schema } from './schema';

type Props = {
  userId: string;
};

export const UserForm = ({ userId }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    // const result = await registerUser(userId, data);
    // if (result.success) {
    //   toaster.create({ description: 'ユーザー登録しました', type: 'success' });
    //   successRedirect();
    // } else {
    //   toaster.create({ description: result.message, type: 'error' });
    // }
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
