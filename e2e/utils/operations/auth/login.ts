import type { Page } from '@playwright/test';
import { Email, Password } from '../../../constants';

export const login = async (page: Page) => {
  await page.goto('/login');

  const logoutButton = await page.getByRole('button', { name: 'ログアウト' });

  if (await logoutButton.isVisible()) {
    await logoutButton.click();
  }
  await page.goto('/login');

  const emailInput = await page.getByRole('textbox', {
    name: 'メールアドレス',
  });
  const passwordInput = await page.getByRole('textbox', { name: 'パスワード' });

  await emailInput.fill(Email);
  await passwordInput.fill(Password);

  await page
    .getByRole('button', {
      name: 'メールアドレスでログイン',
    })
    .click();

  // ログイン後、/config/user または /mypage のいずれかに遷移するのを待つ
  await page.waitForFunction(
    () => {
      const url = window.location.pathname;
      return url.includes('/config/user') || url.includes('/mypage');
    },
    { timeout: 10000 },
  );
};
