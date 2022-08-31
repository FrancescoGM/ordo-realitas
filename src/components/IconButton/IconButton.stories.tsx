import { ComponentStory, ComponentMeta } from '@storybook/react'

import { IconButton } from './IconButton'

export default {
  title: 'Actions/IconButton',
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    children: {
      control: 'text',
      description: 'The text to display inside the button',
      defaultValue: 'LABEL',
      table: {
        type: { summary: null },
        defaultValue: { summary: null }
      }
    },
    'aria-label': {
      control: 'text',
      description: 'The text to accessibility inside the button',
      defaultValue: 'icon button',
      table: {
        type: { summary: null },
        defaultValue: { summary: null }
      }
    },
    variant: {
      options: ['primary', 'secondary'],
      description: 'The variant of the button',
      defaultValue: 'primary',
      control: 'inline-radio',
      table: {
        type: { summary: 'primary | secondary' },
        defaultValue: { summary: 'primary' }
      }
    },

    size: {
      defaultValue: 'md',
      description: 'The size of the button',
      options: ['sm', 'md', 'lg', 'xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'md' }
      }
    },
    loading: {
      control: 'boolean',
      description: 'Whether the button is loading',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },
    full: {
      control: 'boolean',
      description: 'Whether the button is full width',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    }
  },
  component: IconButton
} as ComponentMeta<typeof IconButton>

export const Primary: ComponentStory<typeof IconButton> = args => (
  <IconButton variant="primary" {...args}>
    {args.children}
  </IconButton>
)

export const Secondary: ComponentStory<typeof IconButton> = args => (
  <IconButton variant="secondary" {...args}>
    {args.children}
  </IconButton>
)

Secondary.argTypes = {
  variant: {
    defaultValue: 'secondary'
  }
}
