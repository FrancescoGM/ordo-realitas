import { ButtonHTMLAttributes, ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { IconButtonRoot } from './IconButton.styles'

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof IconButtonRoot> & {
    loading?: boolean
    children: ReactNode
  } & {
    'aria-label': string
  }
