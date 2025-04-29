import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { SigninForm } from './index';

const meta = {
  title: 'features/signin/SigninForm',
  component: SigninForm,
  args: { children: 'ボタン', onClick: fn() },
} satisfies Meta<typeof SigninForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
