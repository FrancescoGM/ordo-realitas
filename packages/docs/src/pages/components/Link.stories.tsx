import { Link as LinkComponent } from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Navigation/Link',
  argTypes: {
    href: {
      defaultValue: '#',
      description: 'The link to navigate',
      type: 'string',
      control: 'text',
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
    external: {
      control: 'boolean',
      description: 'Whether the link is external',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    children: {
      defaultValue: 'navigate to home',
      description: 'The content of link',
      type: 'string',
      control: 'text',
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
    colorScheme: {
      defaultValue: 'white',
      description: 'The color scheme of the link',
      options: ['gray', 'grayLight', 'white', 'violet'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'gray | grayLight | white | violet' },
        defaultValue: { summary: 'white' },
      },
    },
  },
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>

export const Link: ComponentStory<typeof LinkComponent> = (args) => {
  return <LinkComponent {...args} />
}
