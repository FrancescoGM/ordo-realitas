import { forwardRef, useMemo } from 'react'

import {
  FormControlProvider,
  useFormControlProvider,
} from '../FormControlContext'
import { FormControlRoot } from './FormControl.styles'
import { FormControlProps } from './FormControl.types'

export const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  (props, ref) => {
    const { getRootProps, htmlProps, ...context } =
      useFormControlProvider(props)

    const { children, ...rest } = useMemo(
      () => getRootProps(htmlProps, ref),
      [getRootProps, htmlProps, ref],
    )

    return (
      <FormControlRoot {...rest}>
        <FormControlProvider value={context}>{children}</FormControlProvider>
      </FormControlRoot>
    )
  },
)

FormControl.displayName = 'FormControl'
