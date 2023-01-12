import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query'

import {
  // Character,
  UseCharacterResponse,
} from '@interfaces/Characters'

// import { api } from '@services/api'
import character from './character.json'

export function useCharacter(
  id: string,
  options?: UseQueryOptions<UseCharacterResponse>,
): UseQueryResult<UseCharacterResponse> {
  return useQuery<UseCharacterResponse>(
    ['character', id],
    async () => {
      // const { data, headers } = await api.get<Character[]>(`/characters/${id}`)

      // const totalCount = Number(headers['x-total-count']) || 0

      await new Promise((resolve) => setTimeout(resolve, 2000))

      return {
        character,
      }
    },
    options,
  )
}
