import { forwardRef } from 'react'

import { useFormControlContext } from '../FormControlContext'
import { FormRequiredIndicatorRoot } from './FormRequiredIndicator.styles'
import { FormRequiredIndicatorProps } from './FormRequiredIndicator.types'

export const FormRequiredIndicator = forwardRef<
  HTMLSpanElement,
  FormRequiredIndicatorProps
>((props, ref) => {
  const { getRequiredIndicatorProps } = useFormControlContext()

  return (
    <FormRequiredIndicatorRoot {...getRequiredIndicatorProps(props, ref)} />
  )
})

FormRequiredIndicator.displayName = 'FormRequiredIndicator'
