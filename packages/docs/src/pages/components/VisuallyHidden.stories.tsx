import { IoCheckmark } from 'react-icons/io5'

import {
  Button,
  VisuallyHidden as VisuallyHiddenRoot,
} from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Typography/VisuallyHidden',
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Check icon',
      description: 'The text to display visually hidden',
    },
  },
  component: VisuallyHiddenRoot,
} as ComponentMeta<typeof VisuallyHiddenRoot>

export const VisuallyHidden: ComponentStory<typeof VisuallyHiddenRoot> = (
  args,
) => (
  <Button>
    <VisuallyHiddenRoot {...args} />
    <IoCheckmark />
  </Button>
)
