import { styled } from '../../../stitches.config'

export const InputLeftIcon = styled('span', {
  position: 'absolute',
  height: '100%',
  width: '38px',
  top: 0,
  left: 0,
  bottom: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',

  svg: {
    fontSize: '22px',
    color: '$neutralColor-500'
  }
})

export const InputRightIcon = styled('span', {
  position: 'absolute',
  height: '100%',
  top: 0,
  right: 0,
  bottom: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  pointerEvents: 'none',

  svg: {
    fontSize: '22px',
    color: '$neutralColor-500'
  }
})

export const InputGroup = styled('div', {
  position: 'relative',
  width: '100%',
  '&:is(span ~ div)': {
    input: {
      paddingLeft: '36px'
    }
  },
  '&:is(div ~ span)': {
    input: {
      paddingLeft: '36px'
    }
  }
})

export const InputWrapper = styled('div', {
  width: '100%',
  [`& ~ span.${InputLeftIcon.className}`]: {
    background: 'green',
    input: {
      background: 'green',
      margin: '24px'
    }
  }
})

export const InputRoot = styled('input', {
  padding: '$2 $4',
  borderRadius: '$base',
  background: '$neutralColor-900',
  borderColor: '$neutralColor-700',
  borderStyle: 'solid',
  borderWidth: '$mid',
  outline: 'none',
  transition: 'border-color 0.2s',
  '&:focus': {
    borderColor: '$primaryColor-light'
  }
})

export const InputErrorMessage = styled('span', {})
