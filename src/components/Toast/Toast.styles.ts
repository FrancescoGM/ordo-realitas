import { Root, Title, Description, Close } from '@radix-ui/react-toast'

import { styled, keyframes } from '../../../stitches.config'

const slideRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(100%)' }
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 }
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 }
})

export const ToastRoot = styled(Root, {
  width: '100%',
  maxWidth: '400px',
  padding: '$3 $4',
  borderRadius: '$base',
  background: '$white',

  display: 'grid',
  gap: '$2 $4',
  gridTemplateColumns: '1fr auto',
  gridTemplateAreas: '"title close" "description description"',

  variants: {
    status: {
      success: {
        background: '$semanticColor-positive'
      },
      error: {
        background: '$semanticColor-negative'
      },
      warning: {
        background: '$semanticColor-warning'
      },
      info: {
        background: '$white'
      }
    }
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 150ms ease-out`
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 100ms ease-out forwards`
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out'
    },
    '&[data-swipe="end"]': {
      animation: `${slideRight} 100ms ease-out forwards`
    }
  }
})
export const ToastTitle = styled(Title, {
  color: '$neutralColor-900',
  fontWeight: '$medium',
  gridArea: 'title',

  variants: {
    status: {
      success: {
        color: '$white'
      },
      error: {
        color: '$white'
      },
      warning: {
        color: '$white'
      },
      info: {
        color: '$neutralColor-900'
      }
    }
  }
})

export const ToastDescription = styled(Description, {
  gridArea: 'description',
  fontSize: '$md',

  variants: {
    status: {
      success: {
        color: '$neutralColor-200'
      },
      error: {
        color: '$neutralColor-200'
      },
      warning: {
        color: '$neutralColor-200'
      },
      info: {
        color: '$neutralColor-500'
      }
    }
  }
})
export const ToastClose = styled(Close, {
  gridArea: 'close',
  width: '20px',
  height: '20px',

  border: 'none',
  borderRadius: '$base',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  svg: {
    width: '20px',
    height: '20px'
  },

  variants: {
    status: {
      success: {
        color: '$white',
        backgroundColor: '$semanticColor-positive',
        transition: 'filter 0.3s',
        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },
      error: {
        color: '$white',
        backgroundColor: '$semanticColor-negative',
        transition: 'filter 0.3s',
        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },
      warning: {
        color: '$white',
        backgroundColor: '$semanticColor-warning',
        transition: 'filter 0.3s',
        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },
      info: {
        color: '$neutralColor-900',
        backgroundColor: '$white',
        transition: 'background-color 0.3s',
        '&:hover': {
          backgroundColor: '$neutralColor-200'
        }
      }
    }
  }
})
