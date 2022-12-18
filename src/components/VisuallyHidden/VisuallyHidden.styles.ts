import { styled } from '@stitches-config'

export const VisuallyHiddenRoot = styled('span', {
  border: '0px',
  clip: 'rect(0px, 0px, 0px, 0px)',
  height: '1px',
  width: '1px',
  margin: '-1px',
  padding: '0px',
  overflow: 'hidden',
  whitespace: 'nowrap',
  position: 'absolute',
})
