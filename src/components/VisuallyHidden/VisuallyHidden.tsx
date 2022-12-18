import { VisuallyHiddenRoot } from './VisuallyHidden.styles'
import { VisuallyHiddenProps } from './VisuallyHidden.types'

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <VisuallyHiddenRoot>{children}</VisuallyHiddenRoot>
}
