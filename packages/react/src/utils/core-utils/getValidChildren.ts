import { Children, isValidElement, ReactElement, ReactNode } from 'react'

type ValidChildren = ReactElement & {
  type: {
    displayName: string
  }
}

export function getValidChildren(children: ReactNode): ValidChildren[] {
  return Children.toArray(children).filter((child) =>
    isValidElement(child),
  ) as unknown as ValidChildren[]
}
