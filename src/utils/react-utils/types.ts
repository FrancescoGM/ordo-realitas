import type { HTMLProps, Ref, ForwardedRef } from 'react'

import type { Merge } from '@utils/types'

export type PropGetter<
  T extends HTMLElement = HTMLElement,
  P = Record<string, unknown>
> = (
  props?: Merge<HTMLProps<T>, P>,
  ref?: Ref<T> | React.RefObject<T>
) => Merge<HTMLProps<T>, P>
