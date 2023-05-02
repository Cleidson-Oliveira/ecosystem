import type { Meta, StoryObj } from "@storybook/react"

import { Button, ButtonProps } from "@ecosystem/react"

export default {
    title: "Form/Button",
    component: Button,
    args: {
      children: "Send",
      type: "primary",
      size: "small"
    },
    argTypes: {
      type: {
        options: ["primary", "secondary"],
        control: {
          type: "inline-radio",
        },
      },
      size: {
        options: ["small", "big"],
        control: {
          type: "inline-radio",
        },
      }
    }
} as Meta<ButtonProps>
  
export const Primary: StoryObj<ButtonProps> = {
  args: {
    type: "primary"
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    type: "secondary"
  },
}
