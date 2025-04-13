import type { Meta, StoryObj } from '@storybook/react';

import { LoginPage } from './index';

const meta = {
  title: 'components/pages/Login',
  component: LoginPage,
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
