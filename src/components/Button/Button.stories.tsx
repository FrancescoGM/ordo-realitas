import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './Button'

export default {
  title: 'Actions/Button',
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    children: {
      control: 'text',
      description: 'The text to display inside the button',
      defaultValue: 'LABEL',
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
    variant: {
      options: ['primary', 'secondary'],
      description: 'The variant of the button',
      defaultValue: 'primary',
      control: 'inline-radio',
      table: {
        type: { summary: 'primary | secondary' },
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
  },
  component: Button,
} as ComponentMeta<typeof Button>

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Button variant="primary" {...args}>
    {args.children}
  </Button>
)

export const Secondary: ComponentStory<typeof Button> = (args) => (
  <Button variant="secondary" {...args}>
    {args.children}
  </Button>
)

Secondary.argTypes = {
  variant: {
    defaultValue: 'secondary',
  },
}
