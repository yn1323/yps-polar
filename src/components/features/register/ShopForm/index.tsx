'use client';

import { toaster } from '@/src/components/ui/toaster';
import { createClient } from '@/src/helpers/auth/client';
import {
  Button,
  Card,
  Field,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { registerShop, successRedirect } from './actions';
import { type SchemaType, schema, submitFrequencyOptions } from './schema';

export const ShopForm = () => {
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

    const result = await registerShop(user.id, data);
    if (result.success) {
      toaster.create({ description: '店舗を登録しました', type: 'success' });
      successRedirect();
    } else {
      toaster.create({ description: result.message, type: 'error' });
    }
  };

  return (
    <Card.Root w="96" p="8">
      <Stack gap="8" w="full">
        <Text fontSize="lg">店舗登録</Text>
        <Stack
          gap="6"
          as="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
          <Field.Root invalid={!!errors.shopName}>
            <Field.Label>店舗名</Field.Label>
            <Input {...register('shopName')} placeholder="店舗名" />
            <Field.ErrorText>{errors.shopName?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.openTime}>
            <Field.Label>開店時間</Field.Label>
            <Input {...register('openTime')} type="time" />
            <Field.ErrorText>{errors.openTime?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.closeTime}>
            <Field.Label>閉店時間</Field.Label>
            <Input {...register('closeTime')} type="time" />
            <Field.ErrorText>{errors.closeTime?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.submitFrequency}>
            <Field.Label>シフト提出頻度</Field.Label>
            <Select
              {...register('submitFrequency')}
              placeholder="選択してください"
            >
              {submitFrequencyOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
            <Field.ErrorText>{errors.submitFrequency?.message}</Field.ErrorText>
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
