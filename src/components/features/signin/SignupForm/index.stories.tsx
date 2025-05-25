import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { SignupForm } from '.';

const meta = {
  title: 'features/signin/SignupForm',
  component: SignupForm,
  args: {},
} satisfies Meta<typeof SignupForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const signInLink = canvas.getByText('ログイン画面に戻る');
    expect(signInLink.getAttribute('href')).toBe('/signin');
  },
};

export const ErrorMessages: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // フォームの送信ボタンを取得
    const submitButton = canvas.getByRole('button', {
      name: '登録',
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

    const emailFormatError = await canvas.findByText(
      'メールアドレスの形式で入力してください',
    );
    expect(emailFormatError).toBeInTheDocument();

    // パスワードが短すぎる場合のテスト
    await userEvent.clear(emailInput);
    await userEvent.paste('test@example.com');

    const passwordInput = canvas.getByPlaceholderText(
      'パスワードを入力してください',
    );
    await userEvent.paste('short');
    await userEvent.click(submitButton);

    const passwordLengthErrors = await canvas.findAllByText(
      '8〜24文字で入力してください',
    );
    expect(passwordLengthErrors.length).toBeGreaterThan(0);

    // パスワード不一致のテスト
    await userEvent.clear(passwordInput);
    await userEvent.paste('password123');

    // パスワード確認欄にフォーカスを当てる
    canvas
      .getByPlaceholderText('パスワードを入力してください（確認用）')
      .focus();
    await userEvent.paste('different123');
    await userEvent.click(submitButton);

    const passwordMatchError = await canvas.findByText(
      'パスワードが一致しません',
    );
    expect(passwordMatchError).toBeInTheDocument();
  },
};
