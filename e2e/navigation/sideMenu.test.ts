import { login } from '@/e2e/utils/operations/auth/login';
import { registerUser } from '@/e2e/utils/operations/form/registerUser';
import { 
  navigationTestCases, 
  navigateViaSideMenu, 
  navigateDirectly, 
  verifyPageHeading, 
  verifySideMenuVisible 
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

  navigationTestCases.forEach(({ buttonText, url, expectedHeading }) => {
    test(`サイドメニュー経由で${buttonText}ページに遷移できる`, async ({ page }) => {
      // サイドメニューのボタンをクリックして遷移
      await navigateViaSideMenu(page, buttonText, url);
      
      // ページの見出しが正しく表示されることを確認
      await verifyPageHeading(page, expectedHeading);
    });
  });

  test('直接URLアクセスで各ページに遷移できる', async ({ page }) => {
    for (const { url, expectedHeading } of navigationTestCases) {
      await navigateDirectly(page, url);
      await verifyPageHeading(page, expectedHeading);
    }
  });

  test('サイドメニューのアクティブ状態が正しく表示される', async ({ page }) => {
    // 各ページに移動してアクティブボタンのスタイルを確認
    const activeTestCases = [
      { buttonText: 'シフト', url: '/shifts' },
      { buttonText: '勤怠記録', url: '/attendance' },
      { buttonText: 'タイムカード', url: '/timecard' },
      { buttonText: '設定', url: '/settings' },
      { buttonText: 'マイページ', url: '/mypage' }, // 最後にマイページに戻る
    ];

    for (const { buttonText, url } of activeTestCases) {
      await navigateDirectly(page, url);
      
      // アクティブなボタンが表示されていることを確認
      const activeButton = page.getByRole('button', { name: buttonText });
      await expect(activeButton).toBeVisible();
      
      // ページのURLが正しいことも確認
      expect(page.url()).toContain(url);
    }
  });

  test('サイドメニューが常に表示されている', async ({ page }) => {
    // 各ページでサイドメニューが表示されていることを確認
    for (const { url } of navigationTestCases) {
      await navigateDirectly(page, url);
      await verifySideMenuVisible(page);
    }
  });

  test('ログアウト機能が動作する', async ({ page }) => {
    // サイドメニューからログアウトボタンをクリック
    await page.getByRole('button', { name: 'ログアウト' }).click();
    
    // ログアウト後は認証が必要なページにアクセスできないことを確認
    await page.goto('/mypage');
    await page.waitForURL('**/signin**');
    expect(page.url()).toContain('/signin');
  });
});