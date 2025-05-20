import type { Meta, StoryObj } from '@storybook/react';
import { ShopForm } from './index';

const meta: Meta<typeof ShopForm> = {
  title: 'features/register/ShopForm',
  component: ShopForm,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof ShopForm>;

export const Basic: Story = {
  args: {},
};
