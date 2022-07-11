import { VisuallyHiddenWrapper } from './VisuallyHidden.styles'
import { VisuallyHiddenProps } from './VisuallyHidden.types'

export function VisuallyHidden({ children }: VisuallyHiddenProps): JSX.Element {
  return <VisuallyHiddenWrapper>{children}</VisuallyHiddenWrapper>
}
