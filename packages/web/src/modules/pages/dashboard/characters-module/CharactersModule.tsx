import { ChangeEvent, useCallback, useState } from 'react'
import { IoAddOutline, IoPencilOutline, IoTrashOutline } from 'react-icons/io5'

import { useCharacters } from '@hooks/http/useCharacters'
import { Character } from '@interfaces/Characters'
import { Checkbox, IconButton } from '@ordo-realitas/react'

import { CharacterItem } from './character-item'
import {
  CharactersModuleRoot,
  CharactersModuleHeader,
  CharactersModuleContent,
} from './CharactersModule.styles'

export function CharactersModule() {
  const [editing, setEditing] = useState(false)
  const { data } = useCharacters()
  const [selectedCharacters, setSelectedCharacters] = useState<Character[]>([])

  const toggleEditing = useCallback(
    () =>
      setEditing((_editing) => {
        if (!_editing) setSelectedCharacters([])
        return !_editing
      }),
    [],
  )

  const selectCharacter = useCallback(
    (event: ChangeEvent<HTMLInputElement>, character: Character) => {
      const { checked } = event.target

      if (checked === true)
        setSelectedCharacters((_characters) => [..._characters, character])
      else
        setSelectedCharacters((_characters) =>
          _characters.filter(({ id }) => id !== character.id),
        )
    },
    [],
  )

  const changeSelectAllCharacters = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target

      if (checked === true) setSelectedCharacters(data?.characters!)
      else setSelectedCharacters([])
    },
    [data],
  )

  const handleDeleteSelectedCharacters = useCallback(() => {
    console.log(selectedCharacters)
  }, [selectedCharacters])

  return (
    <CharactersModuleRoot>
      <CharactersModuleHeader tabIndex={1}>
        <div>
          {editing && (
            <>
              <Checkbox
                onChange={changeSelectAllCharacters}
                aria-label="Selecionar todos os personagens"
              >
                Selecionar todos
              </Checkbox>
              <IconButton
                size="lg"
                variant="danger"
                aria-label="Excluir personagens selecionados"
                onClick={handleDeleteSelectedCharacters}
              >
                <IoTrashOutline />
              </IconButton>
            </>
          )}
        </div>
        <div>
          <IconButton
            size="lg"
            aria-label="Editar personagens"
            onClick={toggleEditing}
          >
            <IoPencilOutline />
          </IconButton>

          <IconButton
            size="lg"
            variant="secondary"
            aria-label="Criar novo personagem"
          >
            <IoAddOutline />
          </IconButton>
        </div>
      </CharactersModuleHeader>
      <CharactersModuleContent>
        {data?.characters.map((character) => (
          <CharacterItem
            key={character.id}
            character={character}
            editing={editing}
            selected={
              !!selectedCharacters.find(({ id }) => id === character.id)
            }
            onSelect={selectCharacter}
          />
        ))}
      </CharactersModuleContent>
    </CharactersModuleRoot>
  )
}
