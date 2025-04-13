import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/test';
import { MainPageInner } from './index';

const meta = {
  title: 'components/pages/Main',
  component: MainPageInner,
} satisfies Meta<typeof MainPageInner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', { name: 'ログイン' });
    await expect(link).toHaveAttribute('href', '/login');
  },
};
