'use client';

import {
  login,
  signinWithGoogle,
} from '@/src/components/features/signin/SigninForm/actions';
import { toaster } from '@/src/components/ui/toaster';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { redirect } from 'next/navigation';
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

  const signinCallback = (success: boolean) => {
    if (success) {
      toaster.create({
        description: 'ログインに成功しました',
        type: 'success',
      });
      redirect('/dashboard');
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

  const onClickGoogleSignin = async () => {
    const { success } = await signinWithGoogle();
    signinCallback(success);
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
          <Button
            type="submit"
            loading={isSubmitting}
            className="w-full bg-teal-600 hover:bg-teal-700"
          >
            メールアドレスでログイン
          </Button>
        </form>

        <div className="flex items-center gap-6">
          <div className="flex-1 h-px bg-gray-300" />
          <span className="text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300" />
        </div>

        <Button variant="outline" onClick={onClickGoogleSignin} className="w-full">
          <div className="flex items-center gap-2">
            <FcGoogle />
            <span>Googleでログイン</span>
          </div>
        </Button>

        <div className="space-y-2 text-right text-sm text-gray-500">
          <div>
            <Link href="/signin/signup" className="hover:underline">
              新規登録
            </Link>
          </div>
          <div>
            <Link href="/signin/forget" className="hover:underline">
              パスワードを忘れた方
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
