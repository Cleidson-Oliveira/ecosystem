import type { Meta, StoryObj } from "@storybook/react"

import { Button, ButtonProps } from "@ecosystem/react"

export default {
    title: 'Form/Button',
    component: Button,
    args: {
      children: 'Send'
    }    
} as Meta<ButtonProps>
  
export const Primary: StoryObj<ButtonProps> = {}
