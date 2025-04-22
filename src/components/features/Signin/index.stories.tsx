import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Signin } from './index';

const meta = {
  title: 'components/atoms/Button',
  component: Signin,
  args: { children: 'ボタン', onClick: fn() },
} satisfies Meta<typeof Signin>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
