'use client';

import { signup } from '@/src/components/features/signin/SignupForm/actions';
import { toaster } from '@/src/components/ui/toaster';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
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
    <Card className="w-96 p-8">
      <CardContent className="space-y-8">
        <form
          className="space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
        >
          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス</Label>
            <Input
              id="email"
              {...register('email')}
              placeholder="メールアドレスを入力してください"
              disabled={isSubmitting}
              className={errors.email ? 'border-destructive' : ''}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">パスワード</Label>
            <Input
              id="password"
              {...register('password')}
              type="password"
              placeholder="パスワードを入力してください"
              disabled={isSubmitting}
              className={errors.password ? 'border-destructive' : ''}
            />
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="passwordConfirmation">パスワード(確認)</Label>
            <Input
              id="passwordConfirmation"
              {...register('passwordConfirmation')}
              type="password"
              placeholder="パスワードを入力してください（確認用）"
              disabled={isSubmitting}
              className={errors.passwordConfirmation ? 'border-destructive' : ''}
            />
            {errors.passwordConfirmation && (
              <p className="text-sm text-destructive">
                {errors.passwordConfirmation.message}
              </p>
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

        <div className="text-right text-sm text-gray-500">
          <Link href="/signin" className="hover:underline">
            ログイン画面に戻る
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
