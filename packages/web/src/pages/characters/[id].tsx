import Head from 'next/head'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { IoArrowBack, IoPersonOutline } from 'react-icons/io5'

import { useCharacter } from '@hooks/http/useCharacter'
import { Header } from '@modules/components/Header'
import {
  AvatarFallback,
  AvatarImage,
  Avatar,
  Button,
  Link,
  ProgressBar,
  Skeleton,
} from '@ordo-realitas/react'
import {
  CharacterContent,
  CharacterHeader,
  CharacterInventoryRoot,
  CharacterProfileRoot,
  CharacterRoot,
} from '@styles/pages/characters/character'

function CharacterProfileLoading() {
  return (
    <CharacterProfileRoot>
      <Skeleton variant="circle" width="3xl" height="3xl" />
      <Skeleton variant="text" />
      <Skeleton variant="text" />
    </CharacterProfileRoot>
  )
}

export default function Character() {
  const { query } = useRouter()

  const id = query.id as string

  const { data, isLoading, isFetching } = useCharacter(id)

  const loading = useMemo(
    () => isLoading || isFetching,
    [isLoading, isFetching],
  )

  return (
    <>
      <Head>
        <title>{data?.character.name} | Ordo Realitas</title>
      </Head>
      <Header />
      <CharacterRoot>
        <CharacterHeader>
          <Link href="/dashboard">
            <IoArrowBack /> Voltar
          </Link>
          <Button variant="danger">Deletar</Button>
        </CharacterHeader>
        <CharacterContent>
          {loading && <CharacterProfileLoading />}
          {!loading && (
            <CharacterProfileRoot>
              <Avatar size="3xl">
                <AvatarImage
                  src={data?.character.avatar_url!}
                  alt={data?.character.name}
                />
                <AvatarFallback>
                  <IoPersonOutline />
                </AvatarFallback>
              </Avatar>
              <ProgressBar
                value={data?.character.status.hp!}
                max={data?.character.status.max_hp!}
              />
              <ProgressBar
                colorScheme="blue"
                value={data?.character.status.sanity!}
                max={data?.character.status.max_sanity!}
              />
            </CharacterProfileRoot>
          )}

          <CharacterInventoryRoot></CharacterInventoryRoot>
        </CharacterContent>
      </CharacterRoot>
    </>
  )
}
