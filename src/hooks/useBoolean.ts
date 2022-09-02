import { useMemo, useState } from 'react'

type InitialState = boolean | (() => boolean)

type UseBooleanReturn = {
  on: () => void
  off: () => void
  toggle: () => void
}

export function useBoolean(
  initialState: InitialState = false,
): [InitialState, UseBooleanReturn] {
  const [value, setValue] = useState(initialState)
  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    [],
  )
  return [value, callbacks]
}
