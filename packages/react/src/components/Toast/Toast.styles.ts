import {
  Root,
  Title,
  Description,
  Close,
  Viewport,
} from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

const slideRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: 'translateX(100%)' },
})

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const ToastRoot = styled(Root, {
  width: '100%',
  maxWidth: '400px',
  padding: '$3 $4',
  borderRadius: '$base',
  backgroundColor: '$mauve12',

  display: 'grid',
  gap: '$2 $4',
  gridTemplateColumns: '1fr auto',
  gridTemplateAreas: '"title close" "description description"',

  boxSizing: 'border-box',
  outline: 'none',
  transition: 'background-color 0.2s, box-shadow 0.2s',

  '&:focus-visible': {
    boxShadow: '$outlined',
  },

  variants: {
    status: {
      success: {
        backgroundColor: '$grass11',
      },
      error: {
        backgroundColor: '$tomato11',
      },
      warning: {
        backgroundColor: '$amber11',
      },
      info: {
        backgroundColor: '$blue11',
      },
    },
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${fadeIn} 150ms ease-out`,
    },
    '&[data-state="closed"]': {
      animation: `${fadeOut} 100ms ease-out forwards`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${slideRight} 100ms ease-out forwards`,
    },
  },
})

export const ToastTitle = styled(Title, {
  fontWeight: '$medium',
  gridArea: 'title',

  fontFamily: '$highlight',
  boxSizing: 'border-box',

  color: '$mauve1',
})

export const ToastDescription = styled(Description, {
  gridArea: 'description',
  fontSize: '$md',

  fontFamily: '$default',
  boxSizing: 'border-box',

  color: '$mauve1',
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
  boxSizing: 'border-box',

  color: '$mauve1',

  svg: {
    minWidth: '16px',
    minHeight: '16px',
  },

  transition: 'background-color 0.2s, filter 0.2s, box-shadow 0.2s',

  '&:focus-visible:not(:disabled)': {
    boxShadow: '$outlined',
  },

  variants: {
    status: {
      success: {
        backgroundColor: '$green11',

        '&:hover': {
          filter: 'brightness(0.8)',
        },
      },
      error: {
        backgroundColor: '$tomato11',

        '&:hover': {
          filter: 'brightness(0.8)',
        },
      },
      warning: {
        backgroundColor: '$amber11',

        '&:hover': {
          filter: 'brightness(0.8)',
        },
      },
      info: {
        backgroundColor: '$blue11',

        '&:hover': {
          filter: 'brightness(0.8)',
        },
      },
    },
  },
})

export const ToastViewport = styled(Viewport, {
  position: 'fixed',
  left: 0,
  top: 0,
  right: 0,

  padding: '$8',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',

  '@md': {
    padding: '$4',
  },
})
