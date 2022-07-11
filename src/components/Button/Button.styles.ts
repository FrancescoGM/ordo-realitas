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

  borderWidth: '$mid',
  borderStyle: 'solid',

  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$shorter',

  cursor: 'pointer',
  outline: 'none',
  transition: 'background 0.3s, border-color 0.3s',

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
        backgroundColor: 'transparent',
        borderColor: '$primaryColor-mid',

        '&:hover:not(:disabled)': {
          borderColor: '$primaryColor-dark',
          backgroundColor: '$primaryColor-dark'
        }
      }
    },
    {
      variant: 'secondary',
      outlined: true,
      css: {
        backgroundColor: 'transparent',
        borderColor: '$secondaryColor-mid',

        '&:hover:not(:disabled)': {
          borderColor: '$secondaryColor-dark',
          backgroundColor: '$secondaryColor-dark'
        }
      }
    },
    {
      variant: 'tertiary',
      outlined: true,
      css: {
        borderColor: '$primaryColor-mid'
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
        backgroundColor: '$primaryColor-mid',
        borderColor: '$primaryColor-mid',

        '&:focus:not(:disabled)': {
          borderColor: '$primaryColor-light'
        },

        '&:hover:not(:disabled)': {
          borderColor: '$primaryColor-dark',
          backgroundColor: '$primaryColor-dark'
        }
      },
      secondary: {
        backgroundColor: '$secondaryColor-mid',
        borderColor: '$secondaryColor-mid',

        '&:focus:not(:disabled)': {
          borderColor: '$secondaryColor-light'
        },

        '&:hover:not(:disabled)': {
          borderColor: '$secondaryColor-dark',
          backgroundColor: '$secondaryColor-dark'
        }
      },
      tertiary: {
        border: 'none',
        backgroundColor: '$neutralColor-900',

        '&:is(:hover, :focus):not(:disabled)': {
          backgroundColor: `$neutralColor-800`
        }
      },
      danger: {
        border: 'none',
        color: '$semanticColor-negative',
        backgroundColor: '$neutralColor-900',

        '&:is(:hover, :focus):not(:disabled)': {
          backgroundColor: `$neutralColor-800`
        }
      }
    },
    outlined: {
      true: {
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
