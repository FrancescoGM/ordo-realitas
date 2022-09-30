import {
  ProgressBarIndicator,
  ProgressBarRoot,
  ProgressBarOverflowIndicator,
} from './ProgressBar.styles'
import { ProgressBarProps } from './ProgressBar.types'

export function ProgressBar({ value, max, colorScheme }: ProgressBarProps) {
  const overflow = value > max
  const overflowValue = value - max
  const percentOverflowValue = overflow
    ? Math.round((overflowValue * 100) / max)
    : 0

  const percentValue = Math.round((value * 100) / max) - percentOverflowValue

  return (
    <ProgressBarRoot data-value={`${value} / ${max}`}>
      <ProgressBarIndicator
        colorScheme={colorScheme}
        overflow={overflow}
        style={{ width: percentValue + '%' }}
      />

      {overflow && (
        <ProgressBarOverflowIndicator
          colorScheme={colorScheme}
          style={{ width: percentOverflowValue + '%' }}
        />
      )}
    </ProgressBarRoot>
  )
}
