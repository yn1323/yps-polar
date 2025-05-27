'use client';

import { registerUser } from '@/src/components/features/register/UserForm/actions';
import { toaster } from '@/src/components/ui/toaster';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { redirect } from 'next/navigation';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { type SchemaType, schema } from './schema';

type Props = {
  userId: string;
  callbackRoutingPath?: string;
};

export const UserForm = ({ userId, callbackRoutingPath }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<SchemaType> = async (data) => {
    const { success } = await registerUser(userId, {
      userName: data.userName,
    });
    if (success) {
      toaster.create({
        description: 'ユーザー名登録が完了しました',
        type: 'success',
      });
      callbackRoutingPath && redirect(callbackRoutingPath);
    } else {
      toaster.create({
        description: 'ユーザー名登録に失敗しました',
        type: 'error',
      });
    }
  };

  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>ユーザー名登録</CardTitle>
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
            <Label htmlFor="userName">ユーザー名</Label>
            <Input
              id="userName"
              {...register('userName')}
              placeholder="ユーザー名"
              className={errors.userName ? 'border-destructive' : ''}
            />
            {errors.userName && (
              <p className="text-sm text-destructive">{errors.userName.message}</p>
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
