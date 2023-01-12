import { IoPeopleOutline } from 'react-icons/io5'

import { useAuth } from '@hooks/useAuth'
import { AvatarFallback, AvatarImage, Avatar, Icon } from '@ordo-realitas/react'

import { HeaderRoot, HeaderContent } from './Header.styles'

export function Header() {
  const { user } = useAuth()
  return (
    <HeaderRoot>
      <HeaderContent>
        <span>Ordo Realitas</span>

        <Avatar size="lg">
          <AvatarImage
            src={user?.avatar_url || ''}
            alt={`Foto de perfil de ${user?.name}`}
          />
          <AvatarFallback>
            <Icon as={IoPeopleOutline} size="lg" />
          </AvatarFallback>
        </Avatar>
      </HeaderContent>
    </HeaderRoot>
  )
}
