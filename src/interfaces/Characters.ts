export type CharacterStatus = {
  hp: number
  max_hp: number
  sanity: number
  max_sanity: number
}

export type Character = {
  id: string
  name: string
  avatar_url: string | null
  status: CharacterStatus
}

export type UseCharactersResponse = {
  characters: Character[]
  totalCount: number
}

export type UseCharacterResponse = {
  character: Character
}
