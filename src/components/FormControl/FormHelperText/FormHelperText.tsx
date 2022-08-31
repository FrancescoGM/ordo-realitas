import { forwardRef } from 'react'

import { useFormControlContext } from '../FormControlContext'
import { FormHelperTextRoot } from './FormHelperText.styles'
import { FormHelperTextProps } from './FormHelperText.types'

export const FormHelperText = forwardRef<HTMLDivElement, FormHelperTextProps>(
  (props, ref) => {
    const { getHelperTextProps } = useFormControlContext()

    return <FormHelperTextRoot {...getHelperTextProps(props, ref)} />
  }
)

FormHelperText.displayName = 'FormHelperText'
