import { Heading } from '@ordo-realitas/react'
import { styled } from '@stitches-config'
import { motion } from 'framer-motion'

export const HighlightedHeadingRoot = styled(Heading, {})

export const MotionHeading = styled(motion.h1, {
  lineHeight: '$short',

  backgroundClip: 'text',
  color: 'transparent',
  backgroundImage:
    'linear-gradient(to bottom right, $colors$mauve12, $colors$mauve11)',

  span: {
    backgroundColor: 'transparent',
  },
})
