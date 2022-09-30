import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import { IoMailOutline } from 'react-icons/io5'

import { Button } from '@components/Button'
import { Divider } from '@components/Divider'
import { Link } from '@components/Link'
import { useAuth } from '@hooks/useAuth'
import { GoogleButton } from '@modules/components/GoogleButton'
import { UnformInput } from '@modules/components/UnformInput'
import { UnformPasswordInput } from '@modules/components/UnformPasswordInput'
import {
  SignInRoot,
  SignInContent,
  SignInForm,
  SigninFormDividerContent,
} from '@styles/pages/signin'
import { FormHandles, SubmitHandler } from '@unform/core'
import { withSSRGuest } from '@utils/withSSRGuest'
import { yupErrorToUnform } from '@utils/yupErrorToUnform'
import * as yup from 'yup'

type FormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail é inválido')
    .required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória'),
})

export default function SignIn() {
  const formRef = useRef<FormHandles>(null)
  const { onSignIn } = useAuth()

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await signInFormSchema.validate(data, { abortEarly: false })

      await onSignIn(data)
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        formRef.current?.setErrors(yupErrorToUnform(error))
      }
    }
  }

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

          <SignInForm ref={formRef} onSubmit={handleSubmit}>
            <UnformInput
              name="email"
              label="E-mail"
              placeholder="Insira seu e-mail"
              leftIcon={<IoMailOutline />}
            />

            <UnformPasswordInput
              name="password"
              label="Senha"
              placeholder="Senha"
            />

            <Link href="/forgot" colorScheme="grayLight">
              Esqueci minha senha
            </Link>
            <Button type="submit" full>
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
