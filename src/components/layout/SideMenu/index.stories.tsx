import type { Meta, StoryObj } from '@storybook/react';

import { SideMenu } from './index';

const meta = {
  title: 'layout/SideMenu',
  component: SideMenu,
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/mypage',
      },
    },
  },
  argTypes: {
    // コンポーネントにpropsはないが、ドキュメント用に記載
  },
} satisfies Meta<typeof SideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {};

export const ShiftsPage: Story = {
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/shifts',
      },
    },
  },
};

export const SP: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
};

export const SPShifts: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/shifts',
      },
    },
  },
};