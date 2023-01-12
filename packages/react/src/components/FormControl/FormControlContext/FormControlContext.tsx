import { useCallback, useId, useState } from 'react'

import { useBoolean } from '../../../hooks/useBoolean'
import { createContext } from '../../../utils/react-utils/context'
import { mergeRefs } from '../../../utils/react-utils/refs'
import { PropGetter } from '../../../utils/react-utils/types'
import { FormControlProps } from '../FormControl/FormControl.types'
import { FormErrorMessageProps } from '../FormErrorMessage'
import { FormHelperTextProps } from '../FormHelperText/FormHelperText.types'
import { FormLabelProps } from '../FormLabel'
import { FormRequiredIndicatorProps } from '../FormRequiredIndicator'
import {
  FormControlContextData,
  FormControlProviderProps,
} from './FormControlContext.types'

export type FormControlProviderContext = Omit<
  ReturnType<typeof useFormControlProvider>,
  'getRootProps' | 'htmlProps'
>

export const [FormControlProvider, useFormControlContext] =
  createContext<FormControlProviderContext>({
    strict: false,
    name: 'FormControlContext',
  })

export function useFormControlProvider({
  id: idProp,
  isRequired,
  isInvalid,
  isDisabled,
  isReadOnly,
  ...htmlProps
}: FormControlProviderProps): FormControlContextData {
  const [hasFeedbackText, setHasFeedbackText] = useState(true)
  const uuid = useId()
  const id = idProp || `field-${uuid}`

  const labelId = `${id}-label`
  const feedbackId = `${id}-feedback`
  const helpTextId = `${id}-helptext`

  const [hasHelpText, setHasHelpText] = useState(false)

  const [isFocused, setFocus] = useBoolean()

  const getHelperTextProps = useCallback<
    PropGetter<HTMLDivElement, FormHelperTextProps>
  >(
    (props = {}, forwardedRef = null) => ({
      id: helpTextId,
      ...props,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return
        setHasHelpText(true)
      }),
    }),
    [helpTextId],
  )

  const getLabelProps = useCallback<
    PropGetter<HTMLLabelElement, FormLabelProps>
  >(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      id: props.id ?? labelId,
      htmlFor: props.htmlFor ?? id,
    }),
    [id, labelId],
  )

  const getErrorMessageProps = useCallback<
    PropGetter<HTMLSpanElement, FormErrorMessageProps>
  >(
    (props = {}, forwardedRef = null) => ({
      id: feedbackId,
      ...props,
      ref: mergeRefs(forwardedRef, (node) => {
        if (!node) return
        setHasFeedbackText(true)
      }),
      'aria-live': 'polite',
    }),
    [feedbackId],
  )

  const getRootProps = useCallback<
    PropGetter<HTMLDivElement, FormControlProps>
  >(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ...htmlProps,
      ref: forwardedRef,
      role: 'group',
    }),
    [htmlProps],
  )

  const getRequiredIndicatorProps = useCallback<
    PropGetter<HTMLSpanElement, FormRequiredIndicatorProps>
  >(
    (props = {}, forwardedRef = null) => ({
      ...props,
      ref: forwardedRef,
      role: 'presentation',
      'aria-hidden': true,
      children: props?.children || '*',
    }),
    [],
  )

  return {
    isRequired: !!isRequired,
    isInvalid: !!isInvalid,
    isReadOnly: !!isReadOnly,
    isDisabled: !!isDisabled,
    isFocused: !!isFocused,
    onFocus: setFocus.on,
    onBlur: setFocus.off,
    hasFeedbackText,
    setHasFeedbackText,
    hasHelpText,
    setHasHelpText,
    id,
    labelId,
    feedbackId,
    helpTextId,
    htmlProps,
    getHelperTextProps,
    getErrorMessageProps,
    getRootProps,
    getLabelProps,
    getRequiredIndicatorProps,
  }
}
