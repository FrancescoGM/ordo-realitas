import { forwardRef } from 'react'

import * as Primitives from './Avatar.styles'
import * as Types from './Avatar.types'

export const AvatarRoot = forwardRef<HTMLSpanElement, Types.AvatarRootProps>(
  (props, ref) => {
    return <Primitives.AvatarRoot ref={ref} {...props} />
  },
)

export const AvatarImage = forwardRef<HTMLImageElement, Types.AvatarImageProps>(
  (props, ref) => {
    return <Primitives.AvatarImage ref={ref} {...props} />
  },
)

export const AvatarFallback = forwardRef<
  HTMLImageElement,
  Types.AvatarFallbackProps
>((props, ref) => {
  return <Primitives.AvatarFallback ref={ref} {...props} />
})

AvatarRoot.displayName = 'AvatarRoot'
AvatarImage.displayName = 'AvatarImage'
AvatarFallback.displayName = 'AvatarFallback'
