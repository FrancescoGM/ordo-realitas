import { forwardRef } from 'react'

import { useFormControlContext } from '../FormControlContext'
import { FormErrorMessageRoot } from './FormErrorMessage.styles'
import { FormErrorMessageProps } from './FormErrorMessage.types'

export const FormErrorMessage = forwardRef<
  HTMLSpanElement,
  FormErrorMessageProps
>((props, ref) => {
  const { isInvalid, getErrorMessageProps } = useFormControlContext()

  if (!isInvalid) return <></>

  return <FormErrorMessageRoot {...getErrorMessageProps(props, ref)} />
})

FormErrorMessage.displayName = 'FormErrorMessage'
