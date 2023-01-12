import Head from 'next/head'
import { useCallback, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IoMailOutline } from 'react-icons/io5'

import { yupResolver } from '@hookform/resolvers/yup'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Link,
  useToast,
} from '@ordo-realitas/react'
import { ForgotForm, ForgotRoot } from '@styles/pages/forgot'
import { isAxiosError } from '@utils/isAxiosError'
import * as yup from 'yup'

type FormData = {
  email: string
}

const scheme = yup.object().shape({
  email: yup
    .string()
    .email('Esse e-mail é inválido')
    .required('E-mail é obrigatório'),
})

export default function Forgot() {
  const { onToast } = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(scheme),
  })
  const [loading, setLoading] = useState(false)

  const onSubmit: SubmitHandler<FormData> = useCallback(
    async (data) => {
      setLoading(true)
      try {
        // call the route
        onToast({
          title: 'E-mail enviado',
          description:
            'Um e-mail foi enviado com as instruções para recuperar sua senha',
          status: 'success',
        })
      } catch (error) {
        if (isAxiosError(error)) {
          onToast({
            title: 'Ocorreu um erro ao tentar recuperar sua senha',
            description: error.response?.data.message,
            status: 'error',
          })
        } else {
          onToast({
            title: 'Ocorreu algo inesperado',
            description: 'Um erro inexplicável ocorreu',
            status: 'error',
          })
        }
      } finally {
        setLoading(false)
      }
    },
    [onToast],
  )
  return (
    <>
      <Head>
        <title>Recuperar senha | Ordo Realitas</title>
      </Head>
      <ForgotRoot>
        <ForgotForm onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h1" size="xl">
            Recuperar senha
          </Heading>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel>E-mail</FormLabel>
            <InputGroup>
              <InputLeftAddon>
                <Icon as={IoMailOutline} />
              </InputLeftAddon>
              <Input placeholder="Digite seu e-mail" {...register('email')} />
            </InputGroup>
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <Button type="submit" loading={loading} full>
            RECUPERAR
          </Button>
        </ForgotForm>
        <Link href="/signin" colorScheme="gray">
          Voltar
        </Link>
      </ForgotRoot>
    </>
  )
}
