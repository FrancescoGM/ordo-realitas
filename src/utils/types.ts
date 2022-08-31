export type Merge<T, P> = P & Omit<T, keyof P>

// eslint-disable-next-line @typescript-eslint/ban-types
export type FunctionArguments<T> = T extends (...args: infer R) => any
  ? R
  : never
