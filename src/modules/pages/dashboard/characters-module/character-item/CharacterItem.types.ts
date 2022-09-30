import { ChangeEvent } from 'react'

import { Character } from '@interfaces/Characters'

export type CharacterItemProps = {
  character: Character

  onSelect: (event: ChangeEvent<HTMLInputElement>, character: Character) => void
  editing?: boolean
  selected?: boolean
}
