import { styled } from '@stitches-config'

export const CharactersModuleRoot = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const CharactersModuleHeader = styled('div', {
  width: '100%',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$4',

  outline: 'none',
  borderRadius: '$base',
  transition: 'box-shadow 0.2s',

  '&:focus-visible': {
    boxShadow: '$outlined',
  },

  '> div': {
    display: 'flex',
    alignItems: 'center',
    gap: '$4',
  },
})

export const CharactersModuleContent = styled('ul', {
  listStyle: 'none',

  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$4',

  '@lg': { gridTemplateColumns: 'repeat(2, 1fr)' },
  '@md': { gridTemplateColumns: 'repeat(1, 1fr)' },
})
