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
  background: 'rgba(0, 0, 0, 0.9)',
  backdropFilter: 'saturate(120%) blur(10px)'
})

export const HomeHeading = styled('h2', {
  fontSize: '$3xl',
  fontWeight: 'normal',
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
  margin: '80px auto'
})

export const HomeContainer = styled('main', {
  width: '100%',
  paddingTop: '$20',

  display: 'flex',
  flexDirection: 'column'
})

export const HomeGetStatedSection = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})
