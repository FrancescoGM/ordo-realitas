import { VisuallyHiddenWrapper } from './VisuallyHidden.styles'
import { VisuallyHiddenProps } from './VisuallyHidden.types'

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <VisuallyHiddenWrapper>{children}</VisuallyHiddenWrapper>
}
