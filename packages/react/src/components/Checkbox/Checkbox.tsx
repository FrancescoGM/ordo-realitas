import { forwardRef } from 'react'

import { CheckboxRoot, CheckboxInput, CheckboxLabel } from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, id = 'checkbox-id', ...rest }, ref) => {
    return (
      <CheckboxRoot>
        <CheckboxInput ref={ref} id={id} type="checkbox" {...rest} />
        {children && <CheckboxLabel htmlFor={id}>{children}</CheckboxLabel>}
      </CheckboxRoot>
    )
  },
)

Checkbox.displayName = 'Checkbox'
