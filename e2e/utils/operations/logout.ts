import type { Page } from '@playwright/test';

export const logout = async (page: Page) => {
  await page.goto('/dashboard');

  const logoutButton = await page.getByRole('button', { name: 'ログアウト' });

  if (await logoutButton.isVisible()) {
    await logoutButton.click();
  }
  await page.goto('/');
};
