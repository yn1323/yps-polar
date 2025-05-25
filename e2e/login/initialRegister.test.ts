import { deleteTestUser, disconnectDatabase } from '@/e2e/utils/db/user';
import { login } from '@/e2e/utils/operations/auth/login';
import { registerUser } from '@/e2e/utils/operations/form/registerUser';
import { expect, test } from '@playwright/test';
import { UserId } from '../constants';

test.describe('ログイン時のユーザー登録フロー', () => {
  beforeEach(async () => {
    await deleteTestUser(UserId);
  });
  afterEach(async () => {
    // テスト後のクリーンアップ
    await disconnectDatabase();
  });

  test('ログイン時、DBにユーザー情報がないとき - ユーザー登録画面に遷移する', async ({
    page,
  }) => {
    // ログイン実行
    await login(page);

    await page.waitForURL('/config/user');
    expect(page.url()).toContain('/config/user');

    await registerUser(page);
    await page.waitForURL('/dashboard');
    expect(page.url()).toContain('/dashboard');
  });
});
