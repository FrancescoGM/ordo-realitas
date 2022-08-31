import { Dispatch, ForwardedRef, HTMLAttributes, SetStateAction } from 'react'

import { FormControlProps } from '../FormControl/FormControl.types'
import { FormErrorMessageProps } from '../FormErrorMessage'
import { FormHelperTextProps } from '../FormHelperText/FormHelperText.types'
import { FormLabelProps } from '../FormLabel'
import { FormRequiredIndicatorProps } from '../FormRequiredIndicator'

export type FormControlOptions = {
  isRequired?: boolean
  isDisabled?: boolean
  isInvalid?: boolean
  isReadOnly?: boolean
}

export type FormControlProviderProps = HTMLAttributes<HTMLDivElement> &
  FormControlOptions

export type FormControlContext = FormControlProviderProps & {
  label?: string
  id?: string
}

export type GetProps<P, R> = (props: P, ref: ForwardedRef<R>) => P

export type FormControlContextData = {
  isRequired: boolean
  isInvalid: boolean
  isReadOnly: boolean
  isDisabled: boolean
  isFocused: boolean
  onFocus: (event: FocusEvent) => void
  onBlur: (event: Event) => void
  hasFeedbackText: boolean
  setHasFeedbackText: Dispatch<SetStateAction<boolean>>
  hasHelpText: boolean
  setHasHelpText: Dispatch<SetStateAction<boolean>>
  id: string
  labelId: string
  feedbackId: string
  helpTextId: string
  htmlProps: HTMLAttributes<HTMLDivElement>
  getHelperTextProps: GetProps<FormHelperTextProps, HTMLDivElement>
  getErrorMessageProps: GetProps<FormErrorMessageProps, HTMLSpanElement>
  getRootProps: GetProps<FormControlProps, HTMLDivElement>
  getLabelProps: GetProps<FormLabelProps, HTMLLabelElement>
  getRequiredIndicatorProps: GetProps<
    FormRequiredIndicatorProps,
    HTMLSpanElement
  >
}
