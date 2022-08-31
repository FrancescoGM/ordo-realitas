import { LabelHTMLAttributes, ReactNode } from 'react'

export type FormLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  requiredIndicator?: ReactNode
  optionalIndicator?: ReactNode
}
