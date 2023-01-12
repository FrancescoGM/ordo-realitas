import { cloneElement, ReactNode, ReactElement, useMemo } from 'react'

import { getValidChildren } from '../../../utils'
import { InputGroupRoot } from './InputGroup.styles'
import { InputGroupProps } from './InputGroup.types'

function getChildByDisplayName(
  displayName: string,
  children: ReactNode,
): ReactElement | undefined {
  const validChildren = getValidChildren(children)

  return validChildren.find((child) => child.type.displayName === displayName)
}

export function InputGroup({ children, size, ...rest }: InputGroupProps) {
  const LeftAddon = useMemo(() => {
    const element = getChildByDisplayName('InputLeftAddon', children)

    return element && cloneElement(element, { size })
  }, [children, size])

  const RightAddon = useMemo(() => {
    const element = getChildByDisplayName('InputRightAddon', children)
    return element && cloneElement(element, { size })
  }, [children, size])

  const Input = useMemo(() => {
    const element = getChildByDisplayName('Input', children)

    return (
      element &&
      cloneElement(element, {
        size,
        hasLeft: !!LeftAddon,
        hasRight: !!RightAddon,
      })
    )
  }, [children, size, LeftAddon, RightAddon])

  return (
    <InputGroupRoot {...rest}>
      {LeftAddon}
      {Input}
      {RightAddon}
    </InputGroupRoot>
  )
}
