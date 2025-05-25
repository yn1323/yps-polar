import { UserName } from '@/e2e/constants';
import type { Page } from '@playwright/test';

export const registerUser = async (page: Page) => {
  const userNameInput = await page.getByRole('textbox', {
    name: 'ユーザー名',
  });
  await userNameInput.fill(UserName);

  const registerButton = await page.getByRole('button', { name: '登録' });
  await registerButton.click();
};
