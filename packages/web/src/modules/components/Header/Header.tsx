import { IoLogInOutline } from 'react-icons/io5'

import { Button, Heading, Icon } from '@ordo-realitas/react'
import { motion } from 'framer-motion'

import { HeaderRoot, HeaderContent } from './Header.styles'

export function Header() {
  return (
    <HeaderRoot>
      <HeaderContent>
        <Heading fontWeight="normal">Ordo Realitas</Heading>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button>
            <Icon as={IoLogInOutline} />
            Entrar
          </Button>
        </motion.div>
      </HeaderContent>
    </HeaderRoot>
  )
}
