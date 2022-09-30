import { ChangeEvent, useCallback } from 'react'
import { IoPersonOutline } from 'react-icons/io5'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@components/Avatar'
import { Button } from '@components/Button'
import { ProgressBar } from '@components/ProgressBar'
import { Text } from '@components/Text'

import {
  CharacterItemCheckbox,
  CharacterItemRoot,
  CharacterItemStatusText,
} from './CharacterItem.styles'
import { CharacterItemProps } from './CharacterItem.types'

export function CharacterItem({
  character,
  editing = false,
  selected = false,
  onSelect,
}: CharacterItemProps) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onSelect(event, character),
    [character, onSelect],
  )

  return (
    <CharacterItemRoot>
      {editing && (
        <CharacterItemCheckbox
          checked={selected}
          onChange={handleChange}
          aria-label={`Selecionar personagem ${character.name}`}
        />
      )}
      <div>
        <AvatarRoot size="3xl">
          <AvatarImage
            src={character.avatar_url || undefined}
            alt={character.name}
          />
          <AvatarFallback>
            <IoPersonOutline />
          </AvatarFallback>
        </AvatarRoot>

        <Text as="strong" size="lg">
          {character.name}
        </Text>

        <CharacterItemStatusText as="span">
          HP:
          <ProgressBar
            value={character.status.hp}
            max={character.status.max_hp}
          />
        </CharacterItemStatusText>
        <CharacterItemStatusText as="span">
          SA:
          <ProgressBar
            colorScheme="blue"
            value={character.status.sanity}
            max={character.status.max_sanity}
          />
        </CharacterItemStatusText>

        <Button disabled={editing} full>
          Acessar
        </Button>
      </div>
    </CharacterItemRoot>
  )
}
