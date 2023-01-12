import * as Primitives from '@radix-ui/react-avatar'
import { ComponentProps, VariantProps } from '@stitches/react'

import { AvatarRoot } from './Avatar.styles'

export type AvatarProps = VariantProps<typeof AvatarRoot> &
  ComponentProps<typeof AvatarRoot>

export type AvatarImageProps = Primitives.AvatarImageProps

export type AvatarFallbackProps = Primitives.AvatarFallbackProps
