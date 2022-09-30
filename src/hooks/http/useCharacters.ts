import { useQuery, UseQueryResult, UseQueryOptions } from 'react-query'

import {
  // Character,
  UseCharactersResponse,
} from '@interfaces/Characters'

// import { api } from '@services/api'
import characters from './useCharacters.json'

export function useCharacters(
  options?: UseQueryOptions<UseCharactersResponse>,
): UseQueryResult<UseCharactersResponse> {
  return useQuery<UseCharactersResponse>(
    ['characters'],
    async () => {
      // const { data, headers } = await api.get<Character[]>('/characters')

      // const totalCount = Number(headers['x-total-count']) || 0
      const totalCount = 0

      return {
        characters,
        totalCount,
      }
    },
    options,
  )
}
