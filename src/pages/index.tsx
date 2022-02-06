import Head from 'next/head'

import {
  HomeBanner,
  HomeArrowImage,
  HomeContainer,
  HomeHeaderContainer,
  HomeHeaderContent,
  HomeHeading
} from '../styles/pages/Home'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Ordo Realitas</title>
      </Head>
      <HomeHeaderContainer>
        <HomeHeaderContent>
          <h1>Ordo Realitas</h1>

          <nav>
            <a href="#about">Sobre</a>
            <a href="#goals">Objetivos</a>
            <a href="#contact">Contato</a>
          </nav>
        </HomeHeaderContent>
      </HomeHeaderContainer>
      <HomeBanner src="/images/ordo_realitas.webp" alt="Banner ordo realitas" />
      <HomeContainer>
        <HomeArrowImage src="/icons/arrow.svg" alt="Ícone de flecha" />
        <HomeHeading textShadow="red">
          VENHA SE JUNTAR A ORDO REALITAS
        </HomeHeading>
      </HomeContainer>
    </>
  )
}