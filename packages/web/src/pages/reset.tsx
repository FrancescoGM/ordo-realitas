import Head from 'next/head'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordInput } from '@modules/components/PasswordInput'
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Link,
  useToast,
} from '@ordo-realitas/react'
import { ResetForm, ResetRoot } from '@styles/pages/reset'
import { isAxiosError } from '@utils/isAxiosError'
import * as yup from 'yup'

type FormData = {
  password: string
  password_confirmation: string
}

const scheme = yup.object().shape({
  password: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(32, 'A senha deve ter no máximo 32 caracteres')
    .required('Senha é obrigatório'),
  password_confirmation: yup
    .string()
    .min(8, 'A senha deve ter no mínimo 8 caracteres')
    .max(32, 'A senha deve ter no máximo 32 caracteres')
    .is([yup.ref('password')], 'As senhas não coincidem')
    .required('Confirmar senha é obrigatório'),
})

export default function Reset() {
  const { query } = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(scheme),
  })

  const [loading, setLoading] = useState(false)
  const { onToast } = useToast()

  const onSubmit: SubmitHandler<FormData> = useCallback(
    async (data) => {
      setLoading(true)
      try {
        const token = query.token as string

        console.log(token)
        // call the route
        onToast({
          title: 'Senha resetada',
          description: 'Sua senha foi alterada com sucesso',
          status: 'success',
        })
      } catch (error) {
        if (isAxiosError(error)) {
          onToast({
            title: 'Ocorreu um erro ao tentar resetar sua senha',
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
    [query.token, onToast],
  )
  return (
    <>
      <Head>
        <title>Resetar senha | Ordo Realitas</title>
      </Head>
      <ResetRoot>
        <ResetForm onSubmit={handleSubmit(onSubmit)}>
          <Heading as="h1" size="xl">
            Resetar senha
          </Heading>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>Senha</FormLabel>

            <PasswordInput
              placeholder="Insira sua nova senha"
              {...register('password')}
            />
            <FormHelperText>
              Sua senha deve ter entre 8 e 32 caracteres.
            </FormHelperText>
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password_confirmation}>
            <FormLabel>Confirmar Senha</FormLabel>

            <PasswordInput
              placeholder="Confirme sua nova senha"
              {...register('password_confirmation')}
            />
            <FormErrorMessage>
              {errors.password_confirmation?.message}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit" loading={loading} full>
            ENVIAR
          </Button>
        </ResetForm>
        <Link as={NextLink} href="/signin" colorScheme="gray">
          Voltar
        </Link>
      </ResetRoot>
    </>
  )
}
