import { DividerRoot } from './Divider.styles'
import { DividerProps } from './Divider.types'

export function Divider({ orientation = 'horizontal', ...rest }: DividerProps) {
  return (
    <DividerRoot
      orientation={orientation}
      aria-orientation={orientation}
      {...rest}
    />
  )
}
