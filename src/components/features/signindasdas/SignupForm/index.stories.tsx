import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
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
