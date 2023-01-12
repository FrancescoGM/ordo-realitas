import { ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { SpinnerRoot } from './Spinner.styles'

export type SpinnerProps = VariantProps<typeof SpinnerRoot> & {
  label?: ReactNode
}
