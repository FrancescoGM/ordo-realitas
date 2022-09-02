import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Input } from './Input'

export default {
  title: 'Form/Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
)
