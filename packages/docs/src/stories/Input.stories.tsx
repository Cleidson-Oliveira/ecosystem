import type { Meta, StoryObj } from "@storybook/react"

import { Box, Text, TextInput, TextInputProps } from "@ecosystem/react"

export default {
    title: "Form/Input",
    component: TextInput,
    args: {
        placeholder: "Jhon Doe"
    },
    argTypes: {
        placeholder: {
            table: {
                disable: true,
            },
        }
    },
    decorators: [
        (Story) => {
            return (
                <Box 
                    as="label"
                    css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
                >
                    <Text size="sm"> Name </Text>
                    {Story()}
                </Box>
            )
        }
    ]
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {}
export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        prefix: 'exemple.com/',
        placeholder: 'your-username',
    },
}