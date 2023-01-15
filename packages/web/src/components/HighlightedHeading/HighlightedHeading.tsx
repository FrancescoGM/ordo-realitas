import { forwardRef } from 'react'

import { FADE_DOWN_VARIANTS } from '@styles/constants'
import { motion } from 'framer-motion'

import {
  HighlightedHeadingRoot,
  MotionHeading,
} from './HighlightedHeading.styles'
import { HighlightedHeadingProps } from './HighlightedHeading.types'

export const HighlightedHeading = forwardRef<
  HTMLParagraphElement,
  HighlightedHeadingProps
>(({ as = 'h1', children, ...rest }, ref) => {
  return (
    <HighlightedHeadingRoot ref={ref} asChild {...rest}>
      <MotionHeading as={motion[as]} variants={FADE_DOWN_VARIANTS}>
        <span>{children}</span>
      </MotionHeading>
    </HighlightedHeadingRoot>
  )
})

HighlightedHeading.displayName = 'HighlightedHeading'
