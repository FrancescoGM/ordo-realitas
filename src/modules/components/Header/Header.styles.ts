import { styled } from '@stitches-config'

export const HeaderRoot = styled('header', {
  width: '100%',
  height: '80px',

  position: 'sticky',
  top: '0',
  zIndex: '$header',

  backgroundColor: '$mauve2',
  paddingInline: '$4',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  boxShadow: '$soft',
})

export const HeaderContent = styled('div', {
  width: '100%',
  maxWidth: '$window',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})
