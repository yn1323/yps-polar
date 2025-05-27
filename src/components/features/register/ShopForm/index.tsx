'use client';

import { registerShop } from '@/src/components/features/register/ShopForm/actions';
import { toaster } from '@/src/components/ui/toaster';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import { type SchemaType, schema, submitFrequencyOptions } from './schema';

type Props = {
  callbackRoutingPath?: string;
};

export const ShopForm = ({ callbackRoutingPath }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const { success } = await registerShop(data);
    if (success) {
      toaster.create({
        description: '店舗登録が完了しました',
        type: 'success',
      });
      callbackRoutingPath && redirect(callbackRoutingPath);
    } else {
      toaster.create({
        description: '店舗登録に失敗しました',
        type: 'error',
      });
    }
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>店舗登録</CardTitle>
      </CardHeader>
      <CardContent>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="shopName">店舗名</Label>
            <Input
              id="shopName"
              {...register('shopName')}
              placeholder="店舗名"
              className={errors.shopName ? 'border-destructive' : ''}
            />
            {errors.shopName && (
              <p className="text-sm text-destructive">{errors.shopName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="openTime">開店時間</Label>
            <Input
              id="openTime"
              {...register('openTime')}
              type="time"
              className={errors.openTime ? 'border-destructive' : ''}
            />
            {errors.openTime && (
              <p className="text-sm text-destructive">{errors.openTime.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="closeTime">閉店時間</Label>
            <Input
              id="closeTime"
              {...register('closeTime')}
              type="time"
              className={errors.closeTime ? 'border-destructive' : ''}
            />
            {errors.closeTime && (
              <p className="text-sm text-destructive">{errors.closeTime.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="submitFrequency">シフト提出頻度</Label>
            <Controller
              name="submitFrequency"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className={errors.submitFrequency ? 'border-destructive' : ''}>
                    <SelectValue placeholder="選択してください" />
                  </SelectTrigger>
                  <SelectContent>
                    {submitFrequencyOptions.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.submitFrequency && (
              <p className="text-sm text-destructive">{errors.submitFrequency.message}</p>
            )}
          </div>

          <Button
            type="submit"
            loading={isSubmitting}
            className="w-full bg-teal-600 hover:bg-teal-700"
          >
            登録
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
