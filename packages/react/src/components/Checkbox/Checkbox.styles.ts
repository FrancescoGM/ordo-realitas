import { styled } from '../../styles'

export const CheckboxRoot = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  boxSizing: 'border-box',
})

export const CheckboxInput = styled('input', {
  position: 'relative',
  appearance: 'none',
  cursor: 'pointer',
  outline: 'none',
  boxSizing: 'border-box',

  borderRadius: '$base',
  border: '$colors$mauve11 solid $borderWidths$mid',
  transition: 'filter 0.2s, box-shadow 0.2s',

  '&:disabled': {
    opacity: 0.8,
  },

  '&:focus-visible': {
    boxShadow: '$outlined',
  },

  '&:is(:hover):not(:disabled)': {
    filter: 'brightness(0.9)',
  },

  '&:checked': {
    '&::before': {
      content: '',

      position: 'absolute',
      top: '50%',
      left: '50%',

      display: 'inline-block',
      transform: 'translate(-50%, -50%) rotate(45deg)',
      borderRadius: '$base',

      borderBottom: '$borderWidths$mid solid $colors$mauve12',
      borderRight: '$borderWidths$mid solid $colors$mauve12',
    },

    backgroundColor: '$violet8',
  },

  defaultVariants: {
    size: 'md',
  },

  variants: {
    size: {
      sm: {
        width: 'calc($3 + 2px)',
        height: 'calc($3 + 2px)',

        '&:checked': {
          '&::before': {
            height: '4px',
            width: '2px',
          },
        },
      },
      md: {
        width: 'calc($4 + 2px)',
        height: 'calc($4 + 2px)',

        '&:checked': {
          '&::before': {
            height: '7px',
            width: '3px',
          },
        },
      },
      lg: {
        width: 'calc($5 + 2px)',
        height: 'calc($5 + 2px)',

        '&:checked': {
          '&::before': {
            height: '10px',
            width: '4px',
          },
        },
      },
      xl: {
        width: 'calc($6 + 2px)',
        height: 'calc($6 + 2px)',

        '&:checked': {
          '&::before': {
            height: '12px',
            width: '6px',
          },
        },
      },
    },
  },
})

export const CheckboxLabel = styled('label', {
  fontFamily: '$default',
  color: '$mauve12',

  boxSizing: 'border-box',
})
