import { styled } from '../../../stitches.config'

export const SignInRoot = styled('main', {
  width: '100%',
  minHeight: '100vh',
  padding: '$4',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  '@sm': {
    paddingInline: '0',
  },
})

export const SignInContent = styled('div', {
  width: '100%',
  maxWidth: '440px',
  padding: '$8',
  textAlign: 'center',

  borderRadius: '$medium',
  backgroundColor: '$mauve1',
  boxShadow:
    '0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1))',

  '@sm': {
    backgroundColor: 'transparent',
  },
})

export const SignInForm = styled('form', {
  width: 'inherit',
  paddingTop: '$8',
  border: '1px solid $neutralColor-600',
  borderRadius: '$base',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',

  input: {
    width: '100%',
  },
})

export const SigninFormDividerContent = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
})
