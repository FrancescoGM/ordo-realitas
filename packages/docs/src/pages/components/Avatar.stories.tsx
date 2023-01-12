import { IoHelp } from 'react-icons/io5'

import {
  Avatar as AvatarRoot,
  AvatarFallback,
  AvatarImage,
  Icon,
} from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Media and Icons/Avatar',
  argTypes: {
    size: {
      defaultValue: 'md',
      description: 'The size of the avatar',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'sm | md | lg | xl | 2xl | 3xl' },
        defaultValue: { summary: 'md' },
      },
    },
  },
  component: AvatarRoot,
} as ComponentMeta<typeof AvatarRoot>

export const Avatar: ComponentStory<typeof AvatarRoot> = (args) => (
  <AvatarRoot {...args}>
    <AvatarImage
      src="https://pop.proddigital.com.br/wp-content/uploads/sites/8/2021/07/naruto-1.jpg"
      alt="Naruto"
    />
    <AvatarFallback>
      <Icon as={IoHelp} />
    </AvatarFallback>
  </AvatarRoot>
)

export const Fallback: ComponentStory<typeof AvatarRoot> = (args) => (
  <AvatarRoot {...args}>
    <AvatarImage src="error" alt="Naruto" />
    <AvatarFallback>
      <Icon as={IoHelp} />
    </AvatarFallback>
  </AvatarRoot>
)
