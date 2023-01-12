import { IoPerson } from 'react-icons/io5'

import { Icon as IconComponent } from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Media and Icons/Icon',
  argTypes: {
    size: {
      defaultValue: 'md',
      description: 'The size of the icon',
      options: ['sm', 'md', 'lg', 'xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
    },
    colorScheme: {
      defaultValue: 'gray',
      description: 'The color scheme of the icon',
      options: ['gray', 'red', 'green', 'blue', 'yellow', 'black', 'white'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'gray | red | green | blue | yellow | black | white' },
        defaultValue: { summary: 'gray' },
      },
    },
  },
  args: {
    as: IoPerson,
  },
  component: IconComponent,
} as ComponentMeta<typeof IconComponent>

export const Icon: ComponentStory<typeof IconComponent> = (args) => {
  return <IconComponent {...args} />
}
