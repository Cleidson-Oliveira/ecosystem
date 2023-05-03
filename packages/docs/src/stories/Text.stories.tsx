import { Box, Text, TextProps } from "@ecosystem/react"

import type { Meta, StoryObj } from "@storybook/react"

export default {
    title: "Typograph/Text",
    component: Text,

    args: {
        children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        size: "md"
    },

    argTypes: {
        size: {
            options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
            control: "select"
        }
    },

    decorators: [
        (Story) => {
            return (
                <Box>
                    {Story()}
                </Box>
            )
        }
    ]
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
