import {
  FormControl as FormControlComponent,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from '@ordo-realitas/react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
  title: 'Form/FormControl',
  argTypes: {
    isRequired: {
      control: 'boolean',
      description: 'Whether the component is required',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isDisabled: {
      control: 'boolean',
      description: 'Whether the component is disabled',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isInvalid: {
      control: 'boolean',
      description: 'Whether the component is invalid',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    isReadOnly: {
      control: 'boolean',
      description: 'Whether the component is readonly',
      defaultValue: false,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  component: FormControlComponent,
} as ComponentMeta<typeof FormControlComponent>

export const FormControl: ComponentStory<typeof FormControlComponent> = (
  args,
) => {
  return (
    <FormControlComponent {...args}>
      <FormLabel>Password</FormLabel>
      <Input />
      <FormHelperText>
        Password must have between 9 and 18 letters
      </FormHelperText>
    </FormControlComponent>
  )
}

export const FormControlWithErrorMessage: ComponentStory<
  typeof FormControlComponent
> = (args) => {
  return (
    <FormControlComponent {...args}>
      <FormLabel>Password</FormLabel>
      <Input />
      <FormErrorMessage>Password is required</FormErrorMessage>
    </FormControlComponent>
  )
}

export const FormControlWithErrorMessageAndHelperText: ComponentStory<
  typeof FormControlComponent
> = (args) => {
  return (
    <FormControlComponent {...args}>
      <FormLabel>Password</FormLabel>
      <Input />
      <FormHelperText>
        Password must have between 9 and 18 letters
      </FormHelperText>
      <FormErrorMessage>Password is required</FormErrorMessage>
    </FormControlComponent>
  )
}

export const FormControlWithOptionalIndicator: ComponentStory<
  typeof FormControlComponent
> = (args) => {
  return (
    <FormControlComponent {...args}>
      <FormLabel
        optionalIndicator={
          <p style={{ color: '#666', fontSize: '80%' }}>(optional)</p>
        }
      >
        Password
      </FormLabel>
      <Input />
    </FormControlComponent>
  )
}

export const FormControlWithDifferentRequiredIndicator: ComponentStory<
  typeof FormControlComponent
> = (args) => {
  return (
    <FormControlComponent {...args}>
      <FormLabel
        requiredIndicator={
          <p style={{ color: 'red', fontSize: '80%' }}>(required)</p>
        }
      >
        Password
      </FormLabel>
      <Input />
    </FormControlComponent>
  )
}
