import { forwardRef, ForwardRefRenderFunction } from 'react'

import { InputWrapper, InputErrorMessage, InputRoot } from './Input.styles'
import { InputProps } from './Input.types'

const InputRaw: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { error, ...rest },
  ref
) => {
  return (
    <InputWrapper>
      <InputRoot ref={ref} {...rest} />
      {error && <InputErrorMessage>{error}</InputErrorMessage>}
    </InputWrapper>
  )
}

export const Input = forwardRef(InputRaw)
