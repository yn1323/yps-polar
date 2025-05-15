import type { Meta, StoryObj } from '@storybook/react';
import { Signout } from './index';

const meta: Meta<typeof Signout> = {
  title: 'features/Signout',
  component: Signout,
};

export default meta;

type Story = StoryObj<typeof Signout>;

export const Basic: Story = {};
