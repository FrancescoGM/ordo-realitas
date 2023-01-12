import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoMailOutline } from 'react-icons/io5'

import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from '@hooks/useAuth'
import { GoogleButton } from '@modules/components/GoogleButton'
import { PasswordInput } from '@modules/components/PasswordInput'
import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  useBoolean,
} from '@ordo-realitas/react'
import {
  SignInRoot,
  SignInContent,
  SignInForm,
  SigninFormDividerContent,
} from '@styles/pages/signin'
import { withSSRGuest } from '@utils/withSSRGuest'
import * as yup from 'yup'

type FormData = {
  email: string
  password: string
}

const scheme = yup.object().shape({
  email: yup
    .string()
    .email('E-mail é inválido')
    .required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
})

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(scheme) })
  const { onSignIn } = useAuth()
  const [loading, { on, off }] = useBoolean()

  const onSubmit: SubmitHandler<FormData> = useCallback(
    async (data) => {
      on()
      try {
        await onSignIn(data)
      } finally {
        off()
      }
    },
    [off, on, onSignIn],
  )

  return (
    <>
      <Head>
        <title>Login | Ordo Realitas</title>
      </Head>
      <SignInRoot>
        <SignInContent>
          <Image
            src="/images/ordo_realitas_logo.webp"
            alt="Logo da Ordo Realitas"
            width={110}
            height={135}
            layout="fixed"
          />
          <h1>Junte-se a ordem e combata o outro lado</h1>

          <SignInForm onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>E-mail</FormLabel>
              <InputGroup>
                <InputLeftAddon>
                  <Icon as={IoMailOutline} />
                </InputLeftAddon>
                <Input placeholder="Insira seu e-mail" {...register('email')} />
              </InputGroup>
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Senha</FormLabel>
              <PasswordInput placeholder="Senha" {...register('password')} />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Link href="/forgot" colorScheme="grayLight">
              Esqueci minha senha
            </Link>
            <Button type="submit" loading={loading} full>
              ENTRAR
            </Button>
            <SigninFormDividerContent>
              <Divider />
              ou
              <Divider />
            </SigninFormDividerContent>
            <GoogleButton />
            <span>
              Não possui uma conta?{' '}
              <Link href="/signup" colorScheme="grayLight">
                Cadastre-se
              </Link>
            </span>
          </SignInForm>
        </SignInContent>
      </SignInRoot>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest()
