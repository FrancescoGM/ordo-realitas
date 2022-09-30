// import { GetServerSideProps } from 'next'

import Head from 'next/head'

import { Heading } from '@components/Heading'
import { Header } from '@modules/components/Header'
import { CharactersModule } from '@modules/pages/dashboard/characters-module'
import { DashboardRoot, DashboardContent } from '@styles/pages/dashboard'

// import { withSSRAuth } from '@utils/withSSRAuth'

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | Ordo Realitas</title>
      </Head>
      <Header />
      <DashboardRoot>
        <DashboardContent>
          <Heading size="3xl">
            Bem vindo de volta,
            <br /> aqui estão seus personagens
          </Heading>
          <CharactersModule />
        </DashboardContent>
      </DashboardRoot>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = withSSRAuth()
