import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';
import { UserForm } from '.';

const meta = {
  title: 'features/register/UserForm',
  component: UserForm,
  args: {},
} satisfies Meta<typeof UserForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
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

    // ユーザー名を入力
    const userNameInput = canvas.getByPlaceholderText(
      'ユーザー名を入力してください',
    );
    await userEvent.clear(userNameInput);
    await userEvent.paste('テストユーザー');
    await userEvent.click(submitButton);

    // エラーメッセージが消えることを確認
    const errorElements = canvas.queryAllByText('必須項目です');
    expect(errorElements.length).toBe(0);
  },
};
