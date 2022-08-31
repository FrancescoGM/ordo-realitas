import { styled } from '@stitches'

export const ButtonRoot = styled('button', {
  position: 'relative',
  border: 'none',
  borderRadius: '$base',

  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  padding: '$2 $4',

  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$mauve12',
  lineHeight: '$shorter',

  cursor: 'pointer',
  outline: '0px',
  transition: 'background 0.3s, border-color 0.3s, box-shadow 0.3s',

  '&:focus-visible:not(:disabled)': {
    boxShadow: '$outlined'
  },

  defaultVariants: {
    blocked: false,
    full: false,
    outlined: false,
    size: 'md',
    variant: 'primary'
  },

  compoundVariants: [
    {
      variant: 'primary',
      outlined: true,
      css: {
        borderColor: '$violet9',
        backgroundColor: 'transparent',

        '&:hover:not(:disabled)': {
          borderColor: '$violet8',
          backgroundColor: '$violet8'
        }
      }
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        borderColor: '$grass9',
        backgroundColor: 'transparent',

        '&:hover:not(:disabled)': {
          borderColor: '$grass8',
          backgroundColor: '$grass8'
        }
      }
    },
    {
      variant: 'tertiary',
      outlined: true,
      css: {
        border: 'none'
      }
    },
    {
      variant: 'danger',
      outlined: true,
      css: {
        border: 'none'
      }
    }
  ],

  variants: {
    loading: {
      true: {
        cursor: 'wait'
      }
    },
    full: {
      true: {
        width: '100%'
      }
    },
    blocked: {
      true: {
        filter: 'brightness(0.5)',
        cursor: 'not-allowed'
      }
    },
    size: {
      sm: {
        fontSize: '$sm',
        padding: '$2 $4',

        svg: {
          fontSize: 'calc($sm + 1px)'
        }
      },
      md: {
        fontSize: '$md',
        padding: '$2 $4',
        svg: {
          fontSize: 'calc($md + 1px)'
        }
      },
      lg: {
        fontSize: '$lg',
        padding: '$2 $6',
        svg: {
          fontSize: 'calc($lg + 1px)'
        }
      },
      xl: {
        fontSize: '$xl',
        padding: '$2 $6',
        svg: {
          fontSize: 'calc($xl + 1px)'
        }
      }
    },
    variant: {
      primary: {
        backgroundColor: '$violet9',

        svg: {
          color: '$mauve1'
        },

        '&:hover:not(:disabled)': {
          backgroundColor: '$violet8'
        }
      },
      secondary: {
        backgroundColor: '$grass9',

        svg: {
          color: '$mauve1'
        },

        '&:hover:not(:disabled)': {
          backgroundColor: '$grass8'
        }
      },
      tertiary: {
        backgroundColor: 'transparent',

        svg: {
          color: '$violet9'
        },

        '&:hover:not(:disabled)': {
          backgroundColor: `$mauve2`
        }
      },
      danger: {
        color: '$tomato9',
        backgroundColor: 'transparent',

        '&:hover:not(:disabled)': {
          backgroundColor: `$mauve2`
        }
      }
    },
    outlined: {
      true: {
        borderWidth: '$mid',
        borderStyle: 'solid',
        backgroundColor: 'transparent'
      }
    }
  }
})

export const ButtonTextContainer = styled('span', {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  variants: {
    loading: {
      true: {
        visibility: 'hidden'
      }
    }
  }
})

export const ButtonLoadingContainer = styled('span', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
})
