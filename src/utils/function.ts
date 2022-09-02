import { FunctionArguments } from './types'

export function callAllHandlers<T extends (event: any) => any>(...fns: any[]) {
  return function func(event: FunctionArguments<T>[0]) {
    fns.some((fn) => {
      fn?.(event)
      return event?.defaultPrevented
    })
  }
}
