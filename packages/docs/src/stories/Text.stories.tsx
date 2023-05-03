import { Text, TextProps } from "@ecosystem/react"

import type { Meta, StoryObj } from "@storybook/react"

export default {
    title: "Typograph/Text",
    component: Text,

    args: {
        children: "Text Exemple",
        size: "md"
    },

    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: "select"
        }
    }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const StrongText: StoryObj<TextProps> = {
    args: {
        children: "Bold text",
        as: "strong"
    },
    argTypes: {
        as: {
            table: {
                disable: true,
            },
        }
    }
}
