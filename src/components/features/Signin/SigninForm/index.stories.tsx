import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

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
