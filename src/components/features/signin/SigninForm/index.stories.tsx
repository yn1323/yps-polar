import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { SigninForm } from '.';

const meta = {
  title: 'features/signin/SigninForm',
  component: SigninForm,
  args: {},
  parameters: {},
} satisfies Meta<typeof SigninForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const signupLink = canvas.getByText('新規登録');
    expect(signupLink.getAttribute('href')).toBe('/signin/signup');

    const forgetPasswordLink = canvas.getByText('パスワードを忘れた方');
    expect(forgetPasswordLink.getAttribute('href')).toBe('/signin/forget');
  },
};

export const ErrorMessages: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // フォームの送信ボタンを取得
    const submitButton = canvas.getByRole('button', {
      name: 'メールアドレスでログイン',
    });

    // 何も入力せずに送信
    await userEvent.click(submitButton);

    // エラーメッセージが表示されることを確認
    const requiredErrorElements = await canvas.findAllByText('必須項目です');
    expect(requiredErrorElements.length).toBeGreaterThan(0);

    // 不正なメールアドレスでテスト
    const emailInput = canvas.getByPlaceholderText(
      'メールアドレスを入力してください',
    );
    await userEvent.clear(emailInput);
    await userEvent.paste('invalid-email');
    await userEvent.click(submitButton);

    const mailFormatError = await canvas.findByText(
      'メールアドレスの形式で入力してください',
    );
    expect(mailFormatError).toBeInTheDocument();

    // パスワードが短すぎる場合のテスト
    await userEvent.clear(emailInput);
    await userEvent.paste('test@example.com');

    // パスワード欄にフォーカスを当てる
    const passwordInput = canvas.getByPlaceholderText(
      'パスワードを入力してください',
    );
    passwordInput.focus();
    await userEvent.paste('short');
    await userEvent.click(submitButton);

    const passwordLengthError = await canvas.findByText(
      '8〜24文字で入力してください',
    );
    expect(passwordLengthError).toBeInTheDocument();
  },
};
