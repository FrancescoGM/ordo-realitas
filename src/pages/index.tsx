import Head from 'next/head'
import Image from 'next/image'

import {
  HomeArrowImage,
  HomeContainer,
  HomeHeaderContainer,
  HomeHeaderContent,
  HomeHeading,
  HomeGetStatedSection,
  HomeSectionContent,
  HomeSectionText,
  HomeSectionImageWrapper,
  HomeBannerWrapper
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
      <HomeBannerWrapper>
        <Image
          src="/images/ordo_realitas.webp"
          alt="Banner ordo realitas"
          width={1366}
          height={670}
          layout="responsive"
          objectPosition="0 15%"
          objectFit="cover"
          priority
        />
      </HomeBannerWrapper>
      <HomeContainer>
        <HomeArrowImage src="/icons/arrow.svg" alt="Ícone de flecha" />
        <HomeGetStatedSection>
          <HomeHeading textShadow="red">
            VENHA SE JUNTAR A ORDO REALITAS
          </HomeHeading>
          <HomeSectionContent>
            <HomeSectionText textAlign="left">
              <span>
                A Ordo Realitas já foi uma organização secreta com objetivo de
                combater a influência paranormal e esconder a existência de
                entidades paranormais do mundo comum, mas, por conta do avanço
                do conhecimento oculto, isso teve de mudar. A Ordo Realitas é a
                principal organização responsável por manter o bem-estar da
                humanidade e a proteger a realidade dos que buscam enfraquecê-la
                em busca de poder e ambição própria.
              </span>
              <span>
                Mas por conta da aparição de novos ocultistas, que desejam
                acabar com a paz momentânea, estamos convidando vocês a se
                juntar à nossa equipe para investigar e interromper os planos
                desses malfeitores indesejados.
              </span>
              <span>
                Senhor Veríssimo está lhe convidando para fazer parte da ordo
                realitas, e com seus conhecimentos e habilidades erradicar o mal
                atual e concluir sua missão.
              </span>
            </HomeSectionText>
            <HomeSectionImageWrapper>
              <Image
                src="/images/senhor_verissimo.webp"
                alt="Senhor Veríssimo"
                width={330}
                height={367}
                layout="responsive"
              />
            </HomeSectionImageWrapper>
          </HomeSectionContent>
        </HomeGetStatedSection>
      </HomeContainer>
    </>
  )
}
