import { Slot } from '@radix-ui/react-slot'

import { styled } from '../../styles'

export const HeadingSlot = styled(Slot)

export const HeadingRoot = styled('h1', {
  fontFamily: '$highlight',
  color: '$mauve12',

  boxSizing: 'border-box',
})
