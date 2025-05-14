import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { SignupForm } from '.';

const meta = {
  title: 'features/signin/SignupForm',
  component: SignupForm,
  args: {},
  parameters: {},
} satisfies Meta<typeof SignupForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const backToSigninLink = canvas.getByText('ログイン画面に戻る');
    expect(backToSigninLink).toBeInTheDocument();
    expect(backToSigninLink.getAttribute('href')).toBe('/signin');
  },
};

export const ErrorMessages: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // フォームの要素を取得
    const mailInput = canvas.getByPlaceholderText(
      'メールアドレスを入力してください',
    );
    const passwordInput = canvas.getByPlaceholderText(
      'パスワードを入力してください',
    );
    const passwordConfirmInput = canvas.getByPlaceholderText(
      'パスワードを入力してください（確認用）',
    );
    const submitButton = canvas.getByRole('button', { name: '登録' });

    // 空のフォームを送信
    await userEvent.click(submitButton);

    // エラーメッセージが表示されることを確認
    const requiredErrorElements = await canvas.findAllByText('必須項目です');
    expect(requiredErrorElements.length).toBeGreaterThan(0);

    // 不正なメールアドレスを入力
    await userEvent.clear(mailInput);
    await userEvent.type(mailInput, 'invalid-email');
    await userEvent.click(submitButton);

    // メールフォーマットエラーが表示されることを確認
    // eslint-disable-next-line testing-library/await-async-query
    const mailFormatError = await canvas.findByText(
      'メールアドレスの形式で入力してください',
    );
    expect(mailFormatError).toBeInTheDocument();

    // 有効なメールアドレスを入力
    await userEvent.clear(mailInput);
    await userEvent.type(mailInput, 'test@example.com');

    // パスワードが短すぎる場合のエラー
    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, 'short');
    await userEvent.click(submitButton);

    // パスワード長さエラーが表示されることを確認（初めに見つかった要素を使用）
    // eslint-disable-next-line testing-library/await-async-query
    const passwordLengthErrors =
      await canvas.findAllByText(/8〜24文字で入力してください/);
    expect(passwordLengthErrors.length).toBeGreaterThan(0);

    // パスワードが一致しない場合のエラー
    await userEvent.clear(passwordInput);
    await userEvent.type(passwordInput, 'password123');
    await userEvent.clear(passwordConfirmInput);
    await userEvent.type(passwordConfirmInput, 'different123');
    await userEvent.click(submitButton);

    // パスワード不一致エラーが表示されることを確認
    // eslint-disable-next-line testing-library/await-async-query
    const passwordMismatchError = await canvas.findByText(
      'パスワードが一致しません',
    );
    expect(passwordMismatchError).toBeInTheDocument();
  },
};
