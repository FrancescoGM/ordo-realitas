import { Heading as HeadingComponent, HeadingProps } from '@components/Heading'
import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'

export default {
  title: 'Typography/Heading',
  argTypes: {
    as: {
      defaultValue: 'h1',
      description: 'The type of heading',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'h1 | h2 | h3 | h4 | h5 | h6' },
        defaultValue: { summary: 'h1' },
      },
    },
    size: {
      defaultValue: 'md',
      description: 'The size of the heading',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl' },
        defaultValue: { summary: 'md' },
      },
    },
    children: {
      defaultValue: 'Front end is amazing with React',
      description: 'The content of the heading',
      control: 'text',
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
  },
  component: HeadingComponent,
} as ComponentMeta<typeof HeadingComponent>

export const Heading: StoryObj<HeadingProps> = {}

export const Sizes: ComponentStory<typeof HeadingComponent> = (args) => {
  return (
    <div>
      <HeadingComponent size="4xl" noOfLines={1}>
        (4xl) Front end is amazing with React
      </HeadingComponent>
      <HeadingComponent size="3xl" noOfLines={1}>
        (3xl) Front end is amazing with React
      </HeadingComponent>
      <HeadingComponent size="2xl">
        (2xl) Front end is amazing with React
      </HeadingComponent>
      <HeadingComponent size="xl">
        (xl) Front end is amazing with React
      </HeadingComponent>
      <HeadingComponent size="lg">
        (lg) Front end is amazing with React
      </HeadingComponent>
      <HeadingComponent size="md">
        (md) Front end is amazing with React
      </HeadingComponent>
      <HeadingComponent size="sm">
        (sm) Front end is amazing with React
      </HeadingComponent>
      <HeadingComponent size="xs">
        (xs) Front end is amazing with React
      </HeadingComponent>
    </div>
  )
}
