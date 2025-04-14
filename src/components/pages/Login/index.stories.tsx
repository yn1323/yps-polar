import type { Meta, StoryObj } from '@storybook/react';

import { LoginPageInner } from './index';

const meta = {
  title: 'components/pages/Login',
  component: LoginPageInner,
} satisfies Meta<typeof LoginPageInner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
