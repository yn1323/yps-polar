import type { Page } from '@playwright/test';
import { expect } from '@playwright/test';


/**
 * サイドメニューのボタンをクリックして指定されたページに遷移する
 */
export const navigateViaSideMenu = async (
  page: Page,
  buttonText: string,
  expectedUrl: string,
) => {
  await page.getByRole('button', { name: buttonText }).click();
  await page.waitForURL(`**${expectedUrl}**`);
};

/**
 * 直接URLで指定されたページに遷移する
 */
export const navigateDirectly = async (page: Page, url: string) => {
  await page.goto(url);
};

/**
 * ログアウトボタンをクリックする
 */
export const clickLogoutButton = async (page: Page) => {
  await page.getByRole('button', { name: 'ログアウト' }).click();
};
