import { expect, test } from '@playwright/test';
import { login } from '../utils/operations/login';
import { logout } from '../utils/operations/logout';

test.describe('認証関連のページ遷移テスト', () => {
  test('認証フォーム間の遷移', async ({ page }) => {
    await page.goto('/');

    console.log('current page url');
    console.log(await page.url());

    await page.getByRole('link', { name: 'ログイン' }).click();
    await page.getByRole('link', { name: '新規登録' }).click();
    await page.getByRole('link', { name: 'ログイン画面に戻る' }).click();
    await page.getByRole('link', { name: 'パスワードを忘れた方' }).click();
    await page.getByRole('link', { name: 'ログイン画面に戻る' }).click();

    await login(page);
    await page.waitForURL('/dashboard');
    expect(await page).toHaveURL('/dashboard');

    await logout(page);
  });

  test('未認証状態のリダイレクト', async ({ page }) => {
    // ログアウト状態を確保
    await logout(page);

    // 公開ページへのアクセス (リダイレクトなし)
    await page.goto('/');
    expect(page.url()).toContain('/');

    // 認証操作ページへのアクセス (リダイレクトなし)
    await page.goto('/signin');
    expect(page.url()).toContain('/signin');

    await page.goto('/signin/signup');
    expect(page.url()).toContain('/signin/signup');

    await page.goto('/signin/forget');
    expect(page.url()).toContain('/signin/forget');

    // 認証が必要なページへのアクセス (リダイレクトあり)
    await page.goto('/dashboard');
    // 未認証なので /signin にリダイレクトされる
    await page.waitForURL('**/signin**');
    expect(page.url()).toContain('/signin');
  });

  test('認証済み状態のリダイレクト', async ({ page }) => {
    // ログイン実行
    await login(page);
    await page.waitForURL('/dashboard');

    // 公開ページへのアクセス (リダイレクトなし)
    await page.goto('/');
    expect(page.url()).toContain('/');

    // 認証操作ページへのアクセス (ダッシュボードにリダイレクト)
    await page.goto('/signin');
    await page.waitForURL('/dashboard');
    expect(page.url()).toContain('/dashboard');

    await page.goto('/signin/signup');
    await page.waitForURL('/dashboard');
    expect(page.url()).toContain('/dashboard');

    await page.goto('/signin/forget');
    await page.waitForURL('/dashboard');
    expect(page.url()).toContain('/dashboard');

    // 認証が必要なページへのアクセス (リダイレクトなし)
    await page.goto('/dashboard');
    expect(page.url()).toContain('/dashboard');

    // テスト終了時にログアウト
    await logout(page);
  });
});
