import { styled } from '@stitches-config'

export const CharacterRoot = styled('main', {
  padding: '$4',
  minHeight: '200vh',

  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export const CharacterHeader = styled('div', {
  width: 'min(100%, $window)',
  marginInline: 'auto',
  paddingTop: '$16',
  backgroundColor: '$mauve1',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$4',
})

export const CharacterContent = styled('div', {
  width: 'min(100%, $window)',
  marginInline: 'auto',

  display: 'grid',
  gridTemplateColumns: '4fr 8fr',
  gap: '$4',

  '@lg': {
    gridTemplateColumns: '1fr',
  },
})

export const CharacterProfileRoot = styled('section', {
  padding: '$4',
  borderRadius: '$base',
  backgroundColor: '$mauve2',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
})

export const CharacterInventoryRoot = styled('section', {
  padding: '$4',
  borderRadius: '$base',
  backgroundColor: '$mauve2',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',
})
