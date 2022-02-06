import Head from 'next/head'
import Image from 'next/image'

import {
  HomeArrowImage,
  HomeContainer,
  HomeHeaderContainer,
  HomeHeaderContent,
  HomeHeading,
  HomeGetStatedSection
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
      <HomeContainer>
        <Image
          src="/images/ordo_realitas.webp"
          alt="Banner ordo realitas"
          width={1366}
          height={670}
          objectFit="cover"
          layout="intrinsic"
          objectPosition="0 15%"
        />
        <HomeGetStatedSection>
          <HomeArrowImage src="/icons/arrow.svg" alt="Ícone de flecha" />
          <HomeHeading textShadow="red">
            VENHA SE JUNTAR A ORDO REALITAS
          </HomeHeading>
        </HomeGetStatedSection>
      </HomeContainer>
    </>
  )
}
