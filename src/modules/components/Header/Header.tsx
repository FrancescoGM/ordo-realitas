import { IoPeopleOutline } from 'react-icons/io5'

import { AvatarFallback, AvatarImage, AvatarRoot } from '@components/Avatar'
import { Icon } from '@components/Icon'
import { useAuth } from '@hooks/useAuth'

import { HeaderRoot, HeaderContent } from './Header.styles'

export function Header() {
  const { user } = useAuth()
  return (
    <HeaderRoot>
      <HeaderContent>
        <span>Ordo Realitas</span>

        <AvatarRoot size="lg">
          <AvatarImage
            src={user?.avatar_url || ''}
            alt={`Foto de perfil de ${user?.name}`}
          />
          <AvatarFallback>
            <Icon as={IoPeopleOutline} size="lg" />
          </AvatarFallback>
        </AvatarRoot>
      </HeaderContent>
    </HeaderRoot>
  )
}
