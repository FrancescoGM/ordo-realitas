import { styled } from '@stitches-config'
import { motion } from 'framer-motion'

export const MainRoot = styled(motion.main, {
  padding: '$2',
  width: '100%',
  minHeight: '100vh',

  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  '> h1': {
    maxWidth: 700,
    marginInline: 'auto',
    textAlign: 'center',
  },
})

export const MainGithubLink = styled(motion.a, {
  marginTop: '90px',
  marginBottom: '$8',
  marginInline: 'auto',

  border: 'none',
  padding: '$2 $8',
  borderRadius: '$pill',

  color: '$mauve12',
  backgroundColor: '$violet4',

  display: 'flex',
  gap: '$2',
  alignItems: 'center',

  fontSize: '$sm',

  cursor: 'pointer',
  textDecoration: 'none',
  transition: 'box-shadow 0.3s',

  '&:focus-visible': {
    boxShadow: '$outline',
  },

  '&:hover': {
    backgroundColor: '$violet3',
  },
})

export const MainContent = styled('div', {
  width: '100%',
  maxWidth: '$window',

  marginInline: 'auto',

  '> p': {
    maxWidth: '45ch',
    textAlign: 'center',
    marginBlock: '$10',
    marginInline: 'auto',

    color: '$mauve11',
  },
})

export const MainCards = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
  gap: '$8',

  '> div h2': {
    textAlign: 'center',
  },
})
