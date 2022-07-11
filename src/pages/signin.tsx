import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRef } from 'react'
import { IoLockClosedOutline, IoMailOutline } from 'react-icons/io5'

import { FormHandles, SubmitHandler } from '@unform/core'
import * as yup from 'yup'

import { Button } from '../components/Button'
import { GoogleButton } from '../components/GoogleButton'
import { InputGroup, InputLeftIcon } from '../components/Input'
import { UnformInput } from '../components/Unform/UnformInput'
import { useAuth } from '../hooks/useAuth'
import { SignInContainer, SignInForm } from '../styles/pages/SignIn'
import { withSSRGuest } from '../utils/withSSRGuest'
import { yupErrorToUnform } from '../utils/yupErrorToUnform'

type FormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('E-mail é inválido')
    .required('E-mail é obrigatório'),
  password: yup.string().required('Senha é obrigatória')
})

export default function SignIn(): JSX.Element {
  const formRef = useRef<FormHandles>(null)
  const { onSignIn } = useAuth()

  const handleSubmit: SubmitHandler<FormData> = async data => {
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
      <SignInContainer>
        <SignInForm ref={formRef} onSubmit={handleSubmit}>
          <Image
            src="/images/ordo_realitas_logo.webp"
            alt="Logo da Ordo Realitas"
            width={110}
            height={135}
            layout="fixed"
          />
          <h1>Venha se juntar a ordem</h1>
          <InputGroup>
            <InputLeftIcon>
              <IoMailOutline />
            </InputLeftIcon>
            <UnformInput name="email" placeholder="E-mail" />
          </InputGroup>
          <InputGroup>
            <InputLeftIcon>
              <IoLockClosedOutline />
            </InputLeftIcon>
            <UnformInput name="password" placeholder="Senha" />
          </InputGroup>
          <a>Esqueci minha senha</a>
          <Button type="submit" full>
            ENTRAR
          </Button>
          <GoogleButton />
          <span>
            Não possui uma conta? <a>Cadastre-se</a>
          </span>
        </SignInForm>
      </SignInContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRGuest()
