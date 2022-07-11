import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Spinner as SpinnerRoot } from './Spinner'

export default {
  title: 'Feedback/Spinner',
  argTypes: {
    label: {
      control: 'text',
      description: 'The text to display inside the button',
      defaultValue: 'Loading...'
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: 'lg'
    }
  },
  component: SpinnerRoot
} as ComponentMeta<typeof SpinnerRoot>

export const Spinner: ComponentStory<typeof SpinnerRoot> = args => (
  <SpinnerRoot {...args} />
)
