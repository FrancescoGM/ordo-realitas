import {
  IoEyeOffOutline,
  IoLockClosedOutline,
  IoMailOutline,
} from 'react-icons/io5'

import {
  Input as InputComponent,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from '@components/Input'
import { styled } from '@stitches-config'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Form/Input',
  argTypes: {
    placeholder: {
      defaultValue: 'Adicione um texto',
      description: 'Input placeholder',
      type: 'string',
      control: 'text',
      table: {
        type: { summary: null },
        defaultValue: { summary: null },
      },
    },
    size: {
      defaultValue: 'md',
      description: 'The size of the input',
      options: ['sm', 'md', 'lg', 'xl'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'sm | md | lg | xl' },
        defaultValue: { summary: 'md' },
      },
    },
    variant: {
      defaultValue: 'outlined',
      description: 'The variant of the input',
      options: ['outlined', 'filled', 'flushed', 'unstyled'],
      type: 'string',
      control: 'inline-radio',
      table: {
        type: { summary: 'outlined | filled | flushed | unstyled' },
        defaultValue: { summary: 'outlined' },
      },
    },
  },
  component: InputComponent,
} as ComponentMeta<typeof InputComponent>

const InputRoot = styled('div', {
  width: '100%',
  maxWidth: '300px',
  display: 'flex',
  gap: '12px',
  flexDirection: 'column',
})

export const Input: ComponentStory<typeof InputComponent> = (args) => (
  <InputComponent {...args} />
)

export const InputWithIcon: ComponentStory<typeof InputComponent> = ({
  size,
  ...args
}) => {
  const _size = size as any
  return (
    <InputRoot>
      <InputGroup size={_size}>
        <InputComponent {...args} />
        <InputRightAddon>
          <IoMailOutline />
        </InputRightAddon>
      </InputGroup>
      <InputGroup size={_size}>
        <InputLeftAddon>
          <IoMailOutline />
        </InputLeftAddon>
        <InputComponent {...args} />
      </InputGroup>
      <InputGroup size={_size}>
        <InputLeftAddon>
          <IoLockClosedOutline />
        </InputLeftAddon>
        <InputComponent {...args} />
        <InputRightAddon>
          <IoEyeOffOutline />
        </InputRightAddon>
      </InputGroup>
    </InputRoot>
  )
}
