import { login } from '@/e2e/utils/operations/auth/login';
import { registerUser } from '@/e2e/utils/operations/form/registerUser';
import {
  navigateViaSideMenu,
  navigationTestCases,
  verifyPageHeading,
} from '@/e2e/utils/operations/navigation/navigateToPage';
import { expect, test } from '@playwright/test';

test.describe('サイドメニューナビゲーションテスト', () => {
  test.beforeEach(async ({ page }) => {
    // ログインしてマイページに移動
    await login(page);

    // ユーザー登録が必要な場合は実行
    if (page.url().includes('/config/user')) {
      await registerUser(page);
      await page.waitForURL('/mypage');
    }

    // マイページにいることを確認
    await expect(page).toHaveURL(/.*\/mypage.*/);
  });

  test('サイドメニュー経由でのページ遷移とアクティブ状態', async ({ page }) => {
    // 最初はマイページにいるので、他のページを順番にテスト
    const testCases = navigationTestCases.filter(
      ({ buttonText }) => buttonText !== 'マイページ',
    );

    for (const { buttonText, url, expectedHeading } of testCases) {
      // サイドメニューのボタンをクリックして遷移
      await navigateViaSideMenu(page, buttonText, url);

      // ページの見出しが正しく表示されることを確認
      await verifyPageHeading(page, expectedHeading);

      // アクティブなボタンが表示されていることを確認
      const activeButton = page.getByRole('button', { name: buttonText });
      await expect(activeButton).toBeVisible();

      // ページのURLが正しいことも確認
      expect(page.url()).toContain(url);
    }

    // 最後にマイページに戻る
    await navigateViaSideMenu(page, 'マイページ', '/mypage');
    await verifyPageHeading(page, 'マイページ');

    // マイページのアクティブ状態も確認
    const mypageButton = page.getByRole('button', { name: 'マイページ' });
    await expect(mypageButton).toBeVisible();
    expect(page.url()).toContain('/mypage');
  });

  test('ログアウト機能が動作する', async ({ page }) => {
    // サイドメニューからログアウトボタンをクリック
    await page.getByRole('button', { name: 'ログアウト' }).click();

    // /signinに移動していることを確認
    await page.waitForURL('**/signin**');
    expect(page.url()).toContain('/signin');
  });
});
