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
  background: '$mauve12',

  display: 'grid',
  gap: '$2 $4',
  gridTemplateColumns: '1fr auto',
  gridTemplateAreas: '"title close" "description description"',

  variants: {
    status: {
      success: {
        backgroundColor: '$grass9'
      },
      error: {
        backgroundColor: '$tomato9'
      },
      warning: {
        backgroundColor: '$amber9'
      },
      info: {
        backgroundColor: '$mauve12'
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
  fontWeight: '$medium',
  gridArea: 'title',

  variants: {
    status: {
      success: {
        color: '$mauve12'
      },
      error: {
        color: '$mauve12'
      },
      warning: {
        color: '$mauve12'
      },
      info: {
        color: '$mauve1'
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
        color: '$mauve12'
      },
      error: {
        color: '$mauve12'
      },
      warning: {
        color: '$mauve12'
      },
      info: {
        color: '$mauve2'
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
  outline: '0px',

  transition: 'background-color 0.3s, filter 0.3s, box-shadow 0.3s',

  '&:focus-visible:not(:disabled)': {
    boxShadow: '$outlined'
  },

  svg: {
    width: '20px',
    height: '20px'
  },

  variants: {
    status: {
      success: {
        color: '$mauve12',
        backgroundColor: '$green9',

        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },
      error: {
        color: '$mauve12',
        backgroundColor: '$tomato9',

        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },
      warning: {
        color: '$mauve12',
        backgroundColor: '$amber9',

        '&:hover': {
          filter: 'brightness(0.8)'
        }
      },
      info: {
        color: '$mauve1',
        backgroundColor: '$mauve1',

        '&:hover': {
          backgroundColor: '$mauve2'
        }
      }
    }
  }
})
