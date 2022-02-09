import Head from 'next/head'
import Image from 'next/image'

import {
  HomeArrowImage,
  HomeContainer,
  HomeHeaderContainer,
  HomeHeaderContent,
  HomeHeading,
  HomeSection,
  HomeSectionContent,
  HomeSectionText,
  HomeSectionImageWrapper,
  HomeBannerWrapper,
  HomeAboutSection
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
        <HomeSection>
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
        </HomeSection>
        <HomeAboutSection id="about">
          <HomeHeading textShadow="blue">SOBRE A ORDO REALITAS</HomeHeading>
          <HomeSectionContent isCentered>
            <HomeSectionImageWrapper>
              <Image
                src="/images/simbolo.webp"
                alt="Símbolo de ritual"
                width={500}
                height={500}
                layout="responsive"
                loading="lazy"
              />
            </HomeSectionImageWrapper>
            <HomeSectionText textAlign="right">
              <span>
                Baseado na websérie Ordem Paranormal RPG, criado por Rafael
                Lange “Cellbit”. Ordo Realitas é o nome da principal equipe que
                combate os ocultistas e criaturas do universo de ordem
                paranormal, com o fim da temporada denominada, calamidade, foi
                lançado o livro de regras oficial do universo de ordem
                paranormal, e o objetivo deste projeto é dar aos jogadores que
                tenham o livro de regras um lugar para armazenar seus
                personagens e demais coisas relacionadas ao universo do rpg, o
                objetivo é dar a comunidade um gostinho do sistema usado
                internamente pelos jogares na websérie de ordem paranormal.
              </span>
            </HomeSectionText>
          </HomeSectionContent>
        </HomeAboutSection>
        <HomeSection id="goals">
          <HomeHeading textShadow="yellow">OBJETIVOS DO PROJETO</HomeHeading>
          <HomeSectionContent isCentered>
            <HomeSectionText textAlign="left">
              O objetivo é dar aos jogadores e comunidade um gostinho do sistema
              utilizado pela equipe de ordem paranormal, se inspirando no design
              e usuabilidade do sistema. O projeto será aberto à toda a
              comunidade, sem nenhum tipo de custo, a plataforma se baseia nas
              regras e sistemas do livro de regras oficial, será feito o mínimo
              possível de coisas relacionadas as regras gerais do livro, pois o
              projeto é um lugar para armazenar e manuear as informações dos
              seus personagens e afins, e não pra quem não tem o livro poder
              usufruir do rpg.
            </HomeSectionText>
            <HomeSectionImageWrapper>
              <Image
                src="/images/ordo_calamitas_simbolo.webp"
                alt="Símbolo de ritual"
                width={500}
                height={500}
                layout="responsive"
                loading="lazy"
              />
            </HomeSectionImageWrapper>
          </HomeSectionContent>
          <HomeSectionContent isCentered>
            <HomeSectionImageWrapper>
              <Image
                src="/images/simbolo_energia.webp"
                alt="Símbolo de ritual"
                width={500}
                height={500}
                layout="responsive"
                loading="lazy"
              />
            </HomeSectionImageWrapper>
            <HomeSectionText textAlign="right">
              Tanto jogadores quanto mestres terão seu espaço na plataforma. Os
              jogadores poderão criar seus personagens e armazenar suas
              informações como, status, vida, inventário, rituais, entre outras
              informações importantes e por fim, os jogadores podem vincular
              seus personagens à mesa do seu mestre. Já os mestres terão um
              painel de todos os personagens vinculados a sua mesa, podendo
              alterar e adicionar informações aos personagens vinculados.
            </HomeSectionText>
          </HomeSectionContent>
        </HomeSection>
      </HomeContainer>
    </>
  )
}
