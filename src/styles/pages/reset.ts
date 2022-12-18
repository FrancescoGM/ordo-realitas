import { styled } from '@stitches-config'

export const ResetRoot = styled('div', {
  width: '100%',
  minHeight: '100vh',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',

  paddingInline: '$2',

  form: {
    width: '100%',
    maxWidth: 400,

    padding: '$6',
    borderRadius: '$medium',
    backgroundColor: '$mauve2',

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '$4',

    h1: {
      marginBottom: '$2',
    },
    '>button': {
      marginTop: '$2',
    },
  },
})
