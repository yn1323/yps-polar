import { login } from '@/e2e/utils/operations/auth/login';
import { registerUser } from '@/e2e/utils/operations/form/registerUser';
import {
  clickLogoutButton,
  navigateViaSideMenu,
} from '@/e2e/utils/operations/navigation/navigateToPage';
import { expect, test } from '@playwright/test';

const navigationTestCases = [
  { buttonText: 'マイページ', url: '/mypage', expectedHeading: 'マイページ' },
  { buttonText: 'シフト', url: '/shifts', expectedHeading: 'シフト' },
  { buttonText: '勤怠記録', url: '/attendance', expectedHeading: '勤怠記録' },
  {
    buttonText: 'タイムカード',
    url: '/timecard',
    expectedHeading: 'タイムカード',
  },
  { buttonText: '設定', url: '/settings', expectedHeading: '設定' },
];

test.describe('サイドメニューナビゲーションテスト', () => {
  test.beforeEach(async ({ page }) => {
    await login(page);

    if (page.url().includes('/config/user')) {
      await registerUser(page);
      await page.waitForURL('/mypage');
    }

    await expect(page).toHaveURL(/.*\/mypage.*/);
  });

  test('サイドメニュー経由でのページ遷移とアクティブ状態', async ({ page }) => {
    const otherPages = navigationTestCases.filter(
      ({ buttonText }) => buttonText !== 'マイページ',
    );

    // 各ページを順番にテスト
    for (const { buttonText, url, expectedHeading } of otherPages) {
      await navigateViaSideMenu(page, buttonText, url);

      await expect(
        page.getByRole('heading', { name: expectedHeading }),
      ).toBeVisible();
      await expect(
        page.getByRole('button', { name: buttonText }),
      ).toBeVisible();
      expect(page.url()).toContain(url);
    }

    // マイページに戻って確認
    await navigateViaSideMenu(page, 'マイページ', '/mypage');
    await expect(
      page.getByRole('heading', { name: 'マイページ' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'マイページ' }),
    ).toBeVisible();
    expect(page.url()).toContain('/mypage');
  });

  test('ログアウト機能が動作する', async ({ page }) => {
    await clickLogoutButton(page);

    await page.waitForURL('/');
  });
});
