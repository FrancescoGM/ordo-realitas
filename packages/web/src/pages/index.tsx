import Head from 'next/head'
import { IoLogoGithub } from 'react-icons/io5'

import { Card } from '@components/Card'
import { HighlightedHeading } from '@components/HighlightedHeading'
import { Header } from '@modules/components/Header'
import { Icon, Link, Text } from '@ordo-realitas/react'
import { FADE_DOWN_VARIANTS } from '@styles/constants'
import {
  MainRoot,
  MainContent,
  MainCards,
  MainGithubLink,
} from '@styles/pages/main'
import { motion } from 'framer-motion'

export default function Main() {
  return (
    <>
      <Head>
        <title>Home | ordo realitas</title>
      </Head>
      <MainRoot
        initial="hidden"
        whileInView="show"
        animate="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        <Header />
        <Link
          href="https://github.com/FrancescoGM/ordo-realitas"
          external
          asChild
        >
          <MainGithubLink variants={FADE_DOWN_VARIANTS}>
            <Icon as={IoLogoGithub} />
            Repositório github
          </MainGithubLink>
        </Link>
        <HighlightedHeading fontSize="$3xl">
          Crie seu personagem de ordem paranormal
        </HighlightedHeading>

        <MainContent>
          <Text asChild>
            <motion.p variants={FADE_DOWN_VARIANTS}>
              Plataforma feita de fã para fã. crie, edite e compartilhe seus
              personagens de ordem paranormal RPG.
            </motion.p>
          </Text>
          <MainCards>
            <Card>
              <HighlightedHeading as="h2" fontSize="$lg">
                Personalize seus atributos
              </HighlightedHeading>
              <Text></Text>
            </Card>
            <Card>
              <HighlightedHeading as="h2" fontSize="$lg">
                Exporte sua ficha
              </HighlightedHeading>
            </Card>
            <Card>
              <HighlightedHeading as="h2" fontSize="$lg">
                Múltiplos personagens
              </HighlightedHeading>
            </Card>
            <Card>
              <HighlightedHeading as="h2" fontSize="$lg">
                Painel para os mestres
              </HighlightedHeading>
              <Text>
                Para sua seção de ordem paranormal, temos um painel onde os
                mestres poderão acessar os dados dos seus jogadores.
              </Text>
            </Card>
          </MainCards>
        </MainContent>
      </MainRoot>
    </>
  )
}
