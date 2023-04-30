import type { Meta, StoryObj } from "@storybook/react"
import { ReactNode } from "react"

interface ButtonProps {
  children: ReactNode
}
const Button = ({children}: ButtonProps) => {
  return (
    <button>
      {children}
    </button>
  )
}

export default {
    title: 'Form/Button',
    component: Button,
    args: {
      children: 'Send'
    }    
} as Meta<ButtonProps>
  
export const Primary: StoryObj<ButtonProps> = {}
