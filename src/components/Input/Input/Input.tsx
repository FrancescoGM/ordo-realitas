import { forwardRef } from 'react'

import { useFormControl } from '@components/FormControl'

import { InputRoot } from './Input.styles'
import { InputProps } from './Input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const fieldProps = useFormControl<HTMLInputElement>(props)

  return <InputRoot ref={ref} {...fieldProps} />
})

Input.displayName = 'Input'
