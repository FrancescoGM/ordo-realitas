import { ReactNode } from 'react'

import { getValidChildren } from '@utils/getValidChildren'

import { InputGroupRoot } from './InputGroup.styles'
import { InputGroupProps } from './InputGroup.types'

function hasChild(id: string, children: ReactNode): boolean {
  const validChildren = getValidChildren(children)

  return !!validChildren.find((child) => child.type.id === id)
}

export function InputGroup({ children, ...rest }: InputGroupProps) {
  const leftIcon = hasChild('InputLeftAddon', children)
  const rightIcon = hasChild('InputRightAddon', children)

  return (
    <InputGroupRoot leftIcon={leftIcon} rightIcon={rightIcon} {...rest}>
      {children}
    </InputGroupRoot>
  )
}
