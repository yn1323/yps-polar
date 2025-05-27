import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Input } from '@/src/components/ui/input';
import { Label } from '@/src/components/ui/label';
import Link from 'next/link';

export const ResetPasswordForm = () => {
  return (
    <Card className="w-96 p-8">
      <CardContent className="space-y-8">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="mail">メールアドレス</Label>
            <Input id="mail" />
          </div>
          <Button 
            type="submit"
            className="w-full bg-teal-600 hover:bg-teal-700"
          >
            パスワードリセット
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
