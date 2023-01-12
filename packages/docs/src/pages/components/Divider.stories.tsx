import { Divider as DividerRoot } from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Data display/Divider',
  argTypes: {
    orientation: {
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
      defaultValue: 'horizontal',
      table: {
        type: { summary: 'horizontal | vertical' },
        defaultValue: { summary: 'horizontal' },
      },
    },
  },
  component: DividerRoot,
} as ComponentMeta<typeof DividerRoot>

export const Divider: ComponentStory<typeof DividerRoot> = (args) => (
  <div
    style={{
      width: 300,
      height: 300,
    }}
  >
    <DividerRoot {...args} />
  </div>
)
