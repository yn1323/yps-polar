import type { Meta, StoryObj } from '@storybook/react';
import { SignupForm } from '.';

const meta = {
  title: 'features/signin/SignupForm',
  component: SignupForm,
  args: {},
  parameters: {},
} satisfies Meta<typeof SignupForm>;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
