import { FocusEventHandler } from 'react'

import { ariaAttr } from '@utils/core-utils/dom'
import { callAllHandlers } from '@utils/core-utils/function'

import { useFormControlContext } from './FormControlContext'
import { FormControlOptions } from './FormControlContext.types'

export interface UseFormControlProps<T extends HTMLElement>
  extends FormControlOptions {
  id?: string
  onFocus?: FocusEventHandler<T>
  onBlur?: FocusEventHandler<T>
  disabled?: boolean
  readOnly?: boolean
  required?: boolean
  'aria-describedby'?: string
}

type UseFormControlReturn<T extends HTMLElement> = UseFormControlProps<T> & {
  'aria-invalid'?: boolean
  'aria-required'?: boolean
  'aria-readonly'?: boolean
}

export function useFormControl<T extends HTMLElement>(
  props: UseFormControlProps<T>,
): UseFormControlReturn<T> {
  const { isDisabled, isInvalid, isReadOnly, isRequired, ...rest } =
    useFormControlProps(props)

  return {
    ...rest,
    disabled: isDisabled,
    readOnly: isReadOnly,
    required: isRequired,
    'aria-invalid': ariaAttr(isInvalid),
    'aria-required': ariaAttr(isRequired),
    'aria-readonly': ariaAttr(isReadOnly),
  }
}

export function useFormControlProps<T extends HTMLElement>(
  props: UseFormControlProps<T>,
): UseFormControlReturn<T> {
  const field = useFormControlContext()

  const {
    id,
    disabled,
    readOnly,
    required,
    isRequired,
    isInvalid,
    isReadOnly,
    isDisabled,
    onFocus,
    onBlur,
    ...rest
  } = props

  const labelIds: string[] = props['aria-describedby']
    ? [props['aria-describedby']]
    : []

  // Error message must be described first in all scenarios.
  if (field?.hasFeedbackText && field?.isInvalid) {
    labelIds.push(field.feedbackId)
  }

  if (field?.hasHelpText) {
    labelIds.push(field.helpTextId)
  }

  return {
    ...rest,
    'aria-describedby': labelIds.join(' ') || undefined,
    id: id ?? field?.id,
    isDisabled: disabled ?? isDisabled ?? field?.isDisabled,
    isReadOnly: readOnly ?? isReadOnly ?? field?.isReadOnly,
    isRequired: required ?? isRequired ?? field?.isRequired,
    isInvalid: isInvalid ?? field?.isInvalid,
    onFocus: callAllHandlers(field?.onFocus, onFocus),
    onBlur: callAllHandlers(field?.onBlur, onBlur),
  }
}
