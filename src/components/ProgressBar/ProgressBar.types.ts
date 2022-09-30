import { VariantProps } from '@stitches/react'

import { ProgressBarIndicator } from './ProgressBar.styles'

export type ProgressBarProps = VariantProps<typeof ProgressBarIndicator> & {
  value: number
  max: number
}
