import type { Meta, StoryObj } from "@storybook/react";
import { ResetPasswordForm } from ".";

const meta = {
  title: 'features/Signin/ResetPasswordForm',
  component: ResetPasswordForm ,
  args: {},
  parameters: {},
} satisfies Meta<typeof ResetPasswordForm >;
export default meta;

export const Basic: StoryObj<typeof meta> = {};
