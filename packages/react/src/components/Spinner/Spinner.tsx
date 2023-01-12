import { VisuallyHidden } from '../VisuallyHidden'
import { SpinnerRoot } from './Spinner.styles'
import { SpinnerProps } from './Spinner.types'

export function Spinner({ size = 'md', label = 'Loading...' }: SpinnerProps) {
  return (
    <SpinnerRoot size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
    </SpinnerRoot>
  )
}
