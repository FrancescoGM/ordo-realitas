import { Checkbox as CheckboxComponent } from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  argTypes: {
    children: {
      control: 'text',
      description: 'The text to display inside the checkbox',
      defaultValue: 'Yes, I agree with the terms',
      table: {
        type: { summary: 'ReactNode' },
        defaultValue: { summary: null },
      },
    },
    size: {
      defaultValue: 'md',
      description: 'The size of the checkbox',
      options: ['sm', 'md', 'lg', 'xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
    },
  },
  component: CheckboxComponent,
} as ComponentMeta<typeof CheckboxComponent>

export const Checkbox: ComponentStory<typeof CheckboxComponent> = (args) => (
  <CheckboxComponent {...args} />
)
