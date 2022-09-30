import * as Primitives from '@radix-ui/react-avatar'
import { VariantProps } from '@stitches/react'

import { AvatarRoot } from './Avatar.styles'

export type AvatarRootProps = VariantProps<typeof AvatarRoot> &
  Primitives.AvatarProps

export type AvatarImageProps = Primitives.AvatarImageProps

export type AvatarFallbackProps = Primitives.AvatarFallbackProps
