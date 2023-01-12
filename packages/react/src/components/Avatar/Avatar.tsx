import { forwardRef } from 'react'

import {
  AvatarRoot,
  AvatarFallbackRoot,
  AvatarImageRoot,
} from './Avatar.styles'
import {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
} from './Avatar.types'

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>((props, ref) => {
  return <AvatarRoot ref={ref} {...props} />
})

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  (props, ref) => {
    return <AvatarImageRoot ref={ref} {...props} />
  },
)

export const AvatarFallback = forwardRef<HTMLImageElement, AvatarFallbackProps>(
  (props, ref) => {
    return <AvatarFallbackRoot ref={ref} {...props} />
  },
)

Avatar.displayName = 'Avatar'
AvatarImage.displayName = 'AvatarImage'
AvatarFallback.displayName = 'AvatarFallback'
