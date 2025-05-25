import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { ResetPasswordForm } from '.';

const meta = {
  title: 'features/signin/ResetPasswordForm',
  component: ResetPasswordForm,
  args: {},
} satisfies Meta<typeof ResetPasswordForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const backToSigninLink = canvas.getByText('ログイン画面に戻る');
    expect(backToSigninLink.getAttribute('href')).toBe('/signin');
  },
};
