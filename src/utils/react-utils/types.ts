import type { HTMLProps, Ref, RefObject } from 'react'

import type { Merge } from '@utils/types'

export type PropGetter<
  T extends HTMLElement = HTMLElement,
  P = Record<string, unknown>,
> = (
  props?: Merge<HTMLProps<T>, P>,
  ref?: Ref<T> | RefObject<T>,
) => Merge<HTMLProps<T>, P>
