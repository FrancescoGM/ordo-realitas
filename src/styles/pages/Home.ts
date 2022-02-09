import { styled } from '../../../stitches.config'

export const HomeHeaderContainer = styled('header', {
  width: '100%',
  height: '80px',
  paddingInline: '$4',

  position: 'fixed',
  zIndex: '$header',
  top: '0',
  left: '0',
  right: '0',
  background: 'rgba(0, 0, 0, 0.8)',
  backdropFilter: 'saturate(120%) blur(10px)'
})

export const HomeHeading = styled('h2', {
  fontSize: '$3xl',
  fontWeight: 'normal',
  textAlign: 'center',
  variants: {
    textShadow: {
      red: {
        textShadow: '$text-red'
      },
      blue: {
        textShadow: '$text-blue'
      },
      yellow: {
        textShadow: '$text-yellow'
      }
    }
  }
})

export const HomeHeaderContent = styled('div', {
  width: '100%',
  height: '80px',
  maxWidth: '1120px',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  h1: {
    textShadow: '$text-red',
    fontSize: '$2xl'
  },
  nav: {
    display: 'inline-flex',
    gap: '$8',
    a: {
      color: '$neutralColor-100',
      textDecoration: 'none',
      fontSize: '$4'
    }
  }
})

export const HomeArrowImage = styled('img', {
  width: '2px',
  height: '80px',
  margin: '80px auto 0'
})

export const HomeContainer = styled('main', {
  width: '100%',
  marginBottom: '$20',

  display: 'flex',
  flexDirection: 'column'
})

export const HomeSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingInline: '$4',
  paddingTop: '$20'
})

export const HomeSectionContent = styled('div', {
  width: '100%',
  maxWidth: '1120px',
  margin: '80px 0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  gap: '$5',

  '@lg': {
    flexDirection: 'column',
    alignItems: 'center'
  },

  variants: {
    isCentered: {
      true: {
        alignItems: 'center'
      }
    }
  }
})

export const HomeSectionText = styled('p', {
  gridArea: 'text',
  maxWidth: '600px',
  marginBlock: '$5',
  display: 'inline-block',
  fontSize: '$md',

  span: {
    marginBottom: '$5',
    display: 'inline-block'
  },

  variants: {
    textAlign: {
      left: {
        textAlign: 'left',
        '@lg': {
          textAlign: 'center'
        }
      },
      right: {
        textAlign: 'right',
        '@lg': {
          textAlign: 'center'
        }
      }
    }
  }
})

export const HomeSectionImageWrapper = styled('div', {
  width: '100%',
  maxWidth: '330px'
})

export const HomeBannerWrapper = styled('div', {
  width: '100%',
  paddingTop: '$20',

  span: {
    maxHeight: '670px'
  }
})

export const HomeAboutSection = styled('section', {
  paddingBlock: '$20',
  paddingInline: '$4',
  background: '$neutralColor-900',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})
