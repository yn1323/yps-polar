import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';

export interface NavigationTestCase {
  buttonText: string;
  url: string;
  expectedHeading: string;
}

export const navigationTestCases: NavigationTestCase[] = [
  { buttonText: 'ダッシュボード', url: '/dashboard', expectedHeading: 'ダッシュボード' },
  { buttonText: 'ユーザー管理', url: '/users', expectedHeading: 'ユーザー管理' },
  { buttonText: '商品管理', url: '/products', expectedHeading: '商品管理' },
  { buttonText: '注文管理', url: '/orders', expectedHeading: '注文管理' },
  { buttonText: 'レポート', url: '/reports', expectedHeading: 'レポート' },
  { buttonText: '設定', url: '/settings', expectedHeading: '設定' },
];

/**
 * サイドメニューのボタンをクリックして指定されたページに遷移する
 */
export const navigateViaSideMenu = async (page: Page, buttonText: string, expectedUrl: string) => {
  await page.getByRole('button', { name: buttonText }).click();
  await page.waitForURL(`**${expectedUrl}**`);
  expect(page.url()).toContain(expectedUrl);
};

/**
 * 直接URLで指定されたページに遷移する
 */
export const navigateDirectly = async (page: Page, url: string) => {
  await page.goto(url);
};

/**
 * ページの見出しが正しく表示されていることを確認する
 */
export const verifyPageHeading = async (page: Page, expectedHeading: string) => {
  await expect(page.getByRole('heading', { name: expectedHeading })).toBeVisible();
};

/**
 * サイドメニューが表示されていることを確認する
 */
export const verifySideMenuVisible = async (page: Page) => {
  await expect(page.getByText('管理画面')).toBeVisible();
  await expect(page.getByRole('button', { name: 'ログアウト' })).toBeVisible();
};