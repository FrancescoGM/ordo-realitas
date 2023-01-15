import { styled } from '@stitches-config'

export const HeaderRoot = styled('header', {
  width: '100%',
  height: '64px',

  position: 'sticky',
  top: '0',
  zIndex: '$header',

  backgroundFilter: 'blur(24px)',
  paddingInline: '$4',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const HeaderContent = styled('div', {
  width: '100%',
  maxWidth: '$window',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  button: {
    borderRadius: '$pill',
    fontSize: '$sm',
  },
})
