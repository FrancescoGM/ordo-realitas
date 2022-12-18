import { Text as TextComponent, TextProps } from '@components/Text'
import { ComponentMeta, ComponentStory, StoryObj } from '@storybook/react'

const types = [
  'b',
  'i',
  'u',
  'q',
  'dfn',
  'data',
  'time',
  'code',
  'var',
  'abbr',
  'cite',
  'del',
  'em',
  'ins',
  'kbd',
  'bdo',
  'bdi',
  'ins',
  'del',
  'ruby',
  'rb',
  'rt',
  'rtc',
  'rp',
  'mark',
  's',
  'samp',
  'sub',
  'sup',
  'p',
  'span',
  'strong',
  'small',
]

const colorSchemes = ['red', 'green', 'gray', 'blue', 'black']

export default {
  title: 'Typography/Text',
  argTypes: {
    as: {
      defaultValue: 'p',
      description: 'The type of text',
      options: types,
      type: 'string',
      control: {
        type: 'select',
        labels: types,
      },
      table: {
        type: {
          summary:
            'b | i | u | q | dfn | data | time | code | var | abbr | cite | del | em | ins | kbd | bdo | bdi | ins | del | ruby | rb | rt | rtc | rp | mark | s | samp | sub | sup | p | span | strong | small',
        },
        defaultValue: { summary: 'p' },
      },
    },
    size: {
      defaultValue: 'md',
      description: 'The size of the text',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'xs | sm | md | lg | xl | 2xl | 3xl | 4xl' },
        defaultValue: { summary: 'md' },
      },
    },
    colorScheme: {
      defaultValue: 'black',
      description: 'The color scheme of the text',
      options: colorSchemes,
      type: 'string',
      control: {
        type: 'select',
        labels: colorSchemes,
      },
      table: {
        type: { summary: 'red | green | gray | blue | black' },
        defaultValue: { summary: 'black' },
      },
    },
    children: {
      defaultValue: 'Front end is amazing with React',
      description: 'The content of the text',
      control: 'text',
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
  },
  component: TextComponent,
} as ComponentMeta<typeof TextComponent>

export const Text: StoryObj<TextProps> = {}

export const Sizes: ComponentStory<typeof TextComponent> = () => {
  return (
    <div>
      <TextComponent size="4xl" noOfLines={1}>
        (4xl) Front end is amazing with React
      </TextComponent>
      <TextComponent size="3xl" noOfLines={1}>
        (3xl) Front end is amazing with React
      </TextComponent>
      <TextComponent size="2xl">
        (2xl) Front end is amazing with React
      </TextComponent>
      <TextComponent size="xl">
        (xl) Front end is amazing with React
      </TextComponent>
      <TextComponent size="lg">
        (lg) Front end is amazing with React
      </TextComponent>
      <TextComponent size="md">
        (md) Front end is amazing with React
      </TextComponent>
      <TextComponent size="sm">
        (sm) Front end is amazing with React
      </TextComponent>
      <TextComponent size="xs">
        (xs) Front end is amazing with React
      </TextComponent>
    </div>
  )
}
