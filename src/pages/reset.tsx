import Head from 'next/head'
import { useRouter } from 'next/router'
import { useCallback, useRef, useState } from 'react'

import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Link } from '@components/Link'
import { useToast } from '@hooks/useToast'
import { UnformPasswordInput } from '@modules/components/UnformPasswordInput'
import { ResetRoot } from '@styles/pages/reset'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { isAxiosError } from '@utils/isAxiosError'
import { yupErrorToUnform } from '@utils/yupErrorToUnform'
import * as yup from 'yup'

type FormData = {
  password: string
  password_confirmation: string
}

const formSchema = yup.object().shape({
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
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (data) => {
      setLoading(true)
      try {
        await formSchema.validate(data, { abortEarly: false })

        const token = query.token as string

        console.log(token)
        // call the route
        toast({
          title: 'Senha resetada',
          description: 'Sua senha foi alterada com sucesso',
          status: 'success',
        })
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          formRef.current?.setErrors(yupErrorToUnform(error))
        } else if (isAxiosError(error)) {
          toast({
            title: 'Ocorreu um erro ao tentar resetar sua senha',
            description: error.response?.data.message,
            status: 'error',
          })
        } else {
          toast({
            title: 'Ocorreu algo inesperado',
            description: 'Um erro inexplicável ocorreu',
            status: 'error',
          })
        }
      } finally {
        setLoading(false)
      }
    },
    [query.token, toast],
  )
  return (
    <>
      <Head>
        <title>Resetar senha | Ordo Realitas</title>
      </Head>
      <ResetRoot>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Heading as="h1" size="xl">
            Resetar senha
          </Heading>
          <UnformPasswordInput
            name="password"
            label="Senha"
            placeholder="Insira sua nova senha"
            helperText="Sua senha deve ter entre 8 e 32 caracteres."
          />
          <UnformPasswordInput
            name="password_confirmation"
            label="Confirmar Senha"
            placeholder="Confirme sua nova senha"
          />

          <Button type="submit" loading={loading} full>
            ENVIAR
          </Button>
        </Form>
        <Link href="/signin" colorScheme="gray">
          Voltar
        </Link>
      </ResetRoot>
    </>
  )
}
