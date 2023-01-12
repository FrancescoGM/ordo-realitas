import { InputHTMLAttributes, ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { CheckboxRoot } from './Checkbox.styles'

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> &
  VariantProps<typeof CheckboxRoot> & {
    children?: ReactNode
  }
