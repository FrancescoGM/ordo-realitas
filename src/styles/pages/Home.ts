import { styled } from '../../../stitches.config'

export const HomeHeaderContainer = styled('header', {
  width: '100%',
  height: '80px',
  paddingInline: '$4',

  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  background: 'rgba(0, 0, 0, 0.9)',
  backdropFilter: 'saturate(120%) blur(10px)'
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

export const HomeBanner = styled('img', {
  marginTop: '80px',
  width: '100%',
  maxHeight: '670px',
  objectFit: 'cover',
  objectPosition: '0 20%'
})

export const HomeArrowImage = styled('img', {
  margin: '0 auto 80px'
})

export const HomeContainer = styled('div', {
  width: '100%',
  paddingBlock: '$20',
  paddingInline: '$4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
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
