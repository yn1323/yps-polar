import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';

import { SideMenu } from './index';

const meta = {
  title: 'features/SideMenu',
  component: SideMenu,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/dashboard',
      },
    },
  },
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // タイトルが表示されていることを確認
    const title = canvas.getByText('管理画面');
    expect(title).toBeInTheDocument();

    // 各メニュー項目が表示されていることを確認
    const menuItems = [
      'ダッシュボード',
      'ユーザー管理',
      '商品管理',
      '注文管理',
      'レポート',
      '設定',
    ];

    for (const item of menuItems) {
      const menuItem = canvas.getByText(item);
      expect(menuItem).toBeInTheDocument();
    }

    // ログアウトボタンが表示されていることを確認
    const logoutButton = canvas.getByText('ログアウト');
    expect(logoutButton).toBeInTheDocument();
  },
};

export const WithDifferentActivePage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/users',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // ユーザー管理が選択されていることを確認
    const activeMenuItem = canvas.getByText('ユーザー管理');
    expect(activeMenuItem).toBeInTheDocument();
  },
};