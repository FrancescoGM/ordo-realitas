import { Skeleton as SkeletonComponent } from '@components/Skeleton'
import { Text } from '@components/Text'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Feedback/Skeleton',
  argTypes: {
    variant: {
      defaultValue: 'text',
      description: 'The variant of the skeleton',
      options: ['text', 'circle'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'text | circle' },
        defaultValue: { summary: 'text' },
      },
    },
    loaded: {
      control: 'boolean',
      description: 'Whether the data is loaded',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    width: {
      defaultValue: null,
      description: 'The width of skeleton',
      type: 'string',
      control: 'text',
    },
    height: {
      defaultValue: null,
      description: 'The height of skeleton',
      type: 'string',
      control: 'text',
    },
  },
  component: SkeletonComponent,
} as ComponentMeta<typeof SkeletonComponent>

export const Skeleton: ComponentStory<typeof SkeletonComponent> = (args) => {
  return (
    <SkeletonComponent {...args}>
      <Text>Front end is amazing with React</Text>
    </SkeletonComponent>
  )
}
