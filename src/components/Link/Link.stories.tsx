import { Link as LinkComponent } from '@components/Link'
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
  },
  component: LinkComponent,
} as ComponentMeta<typeof LinkComponent>

export const Link: ComponentStory<typeof LinkComponent> = (args) => {
  return <LinkComponent {...args} />
}
