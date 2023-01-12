import { IoTrash } from 'react-icons/io5'

import { Icon, IconButton } from '@ordo-realitas/react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: 'Actions/IconButton',
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
      control: null,
      description: 'The icon to display inside the button',
      defaultValue: <Icon as={IoTrash} />,
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
    'aria-label': {
      control: 'text',
      description: 'The text to accessibility inside the button',
      defaultValue: 'icon button',
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
    outlined: {
      control: 'boolean',
      description: 'Whether the button is outlined',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  component: IconButton,
} as ComponentMeta<typeof IconButton>

export const Primary: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ display: 'flex', width: '500px', justifyContent: 'center' }}>
    <IconButton variant="primary" {...args}>
      {args.children}
    </IconButton>
  </div>
)

export const Secondary: ComponentStory<typeof IconButton> = (args) => (
  <div style={{ display: 'flex', width: '500px', justifyContent: 'center' }}>
    <IconButton variant="secondary" {...args}>
      {args.children}
    </IconButton>
  </div>
)

Secondary.argTypes = {
  variant: {
    defaultValue: 'secondary',
  },
}
