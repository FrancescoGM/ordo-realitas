export type Dict<T = unknown> = Record<string, T>

export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

export function isNotNumber(value: unknown): boolean {
  return (
    typeof value !== 'number' || Number.isNaN(value) || !Number.isFinite(value)
  )
}

export function isNumeric(value: any): boolean {
  return value != null && value - parseFloat(value) + 1 >= 0
}

// Array assertions
export function isArray<T>(value: unknown): value is Array<T> {
  return Array.isArray(value)
}

export function isEmptyArray<T>(value: T[]): value is Array<T> {
  return isArray(value) && value.length === 0
}

// Function assertions
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction<T extends Function = Function>(
  value: unknown,
): value is T {
  return typeof value === 'function'
}

export function isDefined(value: unknown): boolean {
  return typeof value !== 'undefined' && value !== undefined
}

export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined' || value === undefined
}

export function isObject(value: unknown): value is Dict {
  const type = typeof value
  return (
    value != null &&
    (type === 'object' || type === 'function') &&
    !isArray(value)
  )
}

export function isEmptyObject(value: object): value is object {
  return isObject(value) && Object.keys(value).length === 0
}

export function isNotEmptyObject(value: object): value is object {
  return value && !isEmptyObject(value)
}

export function isNull(value: unknown): value is null {
  return value == null
}

// String assertions
export function isString(value: unknown): value is string {
  return Object.prototype.toString.call(value) === '[object String]'
}

// Empty assertions
export function isEmpty(value: unknown): boolean {
  if (isArray(value)) return isEmptyArray(value)
  if (isObject(value)) return isEmptyObject(value)
  if (value == null || value === '') return true
  return false
}
