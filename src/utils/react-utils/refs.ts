import { MutableRefObject, Ref, RefObject } from 'react'

import { isFunction } from '@utils/assertion'

export type ReactRef<T> = Ref<T> | RefObject<T> | MutableRefObject<T>

export function assignRef<T = unknown>(
  ref: ReactRef<T> | undefined,
  value: T
): void {
  if (ref == null) return

  if (isFunction(ref)) {
    ref(value)
    return
  }

  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ref.current = value
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)
  }
}

export function mergeRefs<T>(...refs: (ReactRef<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach(ref => assignRef(ref, node))
  }
}
