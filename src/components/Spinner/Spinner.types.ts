import { ReactNode } from 'react'

import { VariantProps } from '@stitches/react'

import { SpinnerWrapper } from './Spinner.styles'

export type SpinnerProps = VariantProps<typeof SpinnerWrapper> & {
  label?: ReactNode
}
