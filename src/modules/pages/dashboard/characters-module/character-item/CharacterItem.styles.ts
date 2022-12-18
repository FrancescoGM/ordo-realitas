import { Checkbox } from '@components/Checkbox'
import { Text } from '@components/Text'
import { styled } from '@stitches-config'

export const CharacterItemRoot = styled('li', {
  position: 'relative',

  padding: '$10 $4 $4',
  borderRadius: '$base',
  backgroundColor: '$mauve2',

  '> div': {
    textAlign: 'center',

    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '$5',
  },
})

export const CharacterItemCheckbox = styled(Checkbox, {
  position: 'absolute',
  top: '$4',
  left: '$4',
})

export const CharacterItemStatusText = styled(Text, {
  display: 'inline-flex',
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '$4',
})
