import { ButtonHTMLAttributes, ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { ButtonRoot } from './Button.styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonRoot> & {
    loading?: boolean
    children: ReactNode
  }
