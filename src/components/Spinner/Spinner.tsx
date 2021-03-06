import { VisuallyHidden } from '../VisuallyHidden'
import { SpinnerWrapper } from './Spinner.styles'
import { SpinnerProps } from './Spinner.types'

export function Spinner({
  size = 'md',
  label = 'Loading...'
}: SpinnerProps): JSX.Element {
  return (
    <SpinnerWrapper size={size}>
      <VisuallyHidden>{label}</VisuallyHidden>
    </SpinnerWrapper>
  )
}
