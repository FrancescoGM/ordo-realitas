import { forwardRef } from 'react'

import { useFormControlContext } from '../FormControlContext'
import { FormRequiredIndicator } from '../FormRequiredIndicator/FormRequiredIndicator'
import { FormLabelRoot } from './FormLabel.styles'
import { FormLabelProps } from './FormLabel.types'

export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps>(
  (
    {
      children,
      requiredIndicator = <FormRequiredIndicator />,
      optionalIndicator = null,
      ...rest
    },
    ref,
  ) => {
    const { isRequired, getLabelProps } = useFormControlContext()

    return (
      <FormLabelRoot {...getLabelProps(rest, ref)}>
        {children}
        {isRequired ? requiredIndicator : optionalIndicator}
      </FormLabelRoot>
    )
  },
)

FormLabel.displayName = 'FormLabel'
