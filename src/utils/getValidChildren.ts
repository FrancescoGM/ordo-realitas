import { Children, isValidElement, ReactElement, ReactNode } from 'react'

type ValidChildren = ReactElement & {
  width: number
  type: {
    id: string
    name: string
  }
}

export function getValidChildren(children: ReactNode): ValidChildren[] {
  return Children.toArray(children).filter(child =>
    isValidElement(child)
  ) as unknown as ValidChildren[]
}
