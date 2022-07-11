import { Form } from '@unform/web'

import { styled } from '../../../stitches.config'

export const SignInContainer = styled('main', {
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
})

export const SignInForm = styled(Form, {
  width: '100%',
  maxWidth: '500px',
  padding: '$8',
  border: '1px solid $neutralColor-600',
  borderRadius: '$base',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',

  input: {
    width: '100%'
  }
})
