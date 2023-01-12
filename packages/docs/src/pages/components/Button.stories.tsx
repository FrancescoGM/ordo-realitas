import { Button, ButtonProps } from '@ordo-realitas/react'
import { ComponentMeta, StoryObj } from '@storybook/react'

export default {
  title: 'Actions/Button',
  argTypes: {
    children: {
      control: 'text',
      description: 'The text to display inside the button',
      defaultValue: 'label',
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'The variant of the button',
      defaultValue: 'primary',
      control: 'inline-radio',
      table: {
        type: { summary: 'primary | secondary | tertiary | danger' },
        defaultValue: { summary: 'primary' },
      },
    },
    size: {
      defaultValue: 'md',
      description: 'The size of the button',
      options: ['sm', 'md', 'lg', 'xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
    },
    outlined: {
      control: 'boolean',
      description: 'Whether the button is outlined',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    uppercase: {
      control: 'boolean',
      description: 'Whether the button is uppercase',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is loading',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    full: {
      control: 'boolean',
      description: 'Whether the button is full width',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
  },
}

export const Outlined: StoryObj<ButtonProps> = {
  args: {
    outlined: true,
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true,
  },
}
