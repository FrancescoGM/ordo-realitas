import Head from 'next/head'
import { useCallback, useRef, useState } from 'react'
import { IoMailOutline } from 'react-icons/io5'

import { Button } from '@components/Button'
import { Heading } from '@components/Heading'
import { Link } from '@components/Link'
import { useToast } from '@hooks/useToast'
import { UnformInput } from '@modules/UnformInput'
import { ForgotRoot } from '@styles/pages/forgot'
import { FormHandles, SubmitHandler } from '@unform/core'
import { Form } from '@unform/web'
import { isAxiosError } from '@utils/isAxiosError'
import { yupErrorToUnform } from '@utils/yupErrorToUnform'
import * as yup from 'yup'

type FormData = {
  email: string
}

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email('Esse e-mail é inválido')
    .required('E-mail é obrigatório'),
})

export default function Forgot() {
  const toast = useToast()
  const formRef = useRef<FormHandles>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit: SubmitHandler<FormData> = useCallback(
    async (data) => {
      setLoading(true)
      try {
        await formSchema.validate(data, { abortEarly: false })

        // call the route
        toast({
          title: 'E-mail enviado',
          description:
            'Um e-mail foi enviado com as instruções para recuperar sua senha',
          status: 'success',
        })
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          formRef.current?.setErrors(yupErrorToUnform(error))
        } else if (isAxiosError(error)) {
          toast({
            title: 'Ocorreu um erro ao tentar recuperar sua senha',
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
    [toast],
  )
  return (
    <>
      <Head>
        <title>Recuperar senha | Ordo Realitas</title>
      </Head>
      <ForgotRoot>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Heading as="h1" size="xl">
            Recuperar senha
          </Heading>
          <UnformInput
            name="email"
            label="E-mail"
            placeholder="Insira seu e-mail"
            leftIcon={<IoMailOutline />}
          />

          <Button type="submit" loading={loading} full>
            RECUPERAR
          </Button>
        </Form>
        <Link href="/signin" colorScheme="gray">
          Voltar
        </Link>
      </ForgotRoot>
    </>
  )
}
