import { login } from '@/e2e/utils/operations/auth/login';
import { registerUser } from '@/e2e/utils/operations/form/registerUser';
import { expect, test } from '@playwright/test';

test.describe('ログイン時のユーザー登録フロー', () => {
  test('ログイン時、DBにユーザー情報がないとき - ユーザー登録画面に遷移する', async ({
    page,
  }) => {
    // ログイン実行
    await login(page);

    await page.waitForURL('/config/user');
    expect(page.url()).toContain('/config/user');

    await registerUser(page);
    await page.waitForURL('/mypage');
    expect(page.url()).toContain('/mypage');
  });
});
