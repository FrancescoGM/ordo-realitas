export type Merge<T, P> = P & Omit<T, keyof P>

export type FunctionArguments<T> = T extends (...args: infer R) => any
  ? R
  : never
