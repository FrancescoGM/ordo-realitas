import Script from 'next/script'
import { useCallback, useRef, useState } from 'react'
import { IoLogoGoogle } from 'react-icons/io5'

import { Button, ButtonProps } from '@components/Button'
import { useAuth } from '@hooks/useAuth'
import { useToast } from '@hooks/useToast'

type GoogleButtonProps = Omit<ButtonProps, 'onClick' | 'children'>
/* global gapi */
type GoogleUser = gapi.auth2.GoogleUser

export function GoogleButton({ ...rest }: GoogleButtonProps) {
  const [loading, setLoading] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const { onSignInWithGoogle } = useAuth()
  const toast = useToast()

  const handleSuccess = useCallback(
    async (googleUser: GoogleUser) => {
      try {
        const { id_token } = googleUser.getAuthResponse()

        await onSignInWithGoogle(id_token)
      } finally {
        setLoading(false)
      }
    },
    [onSignInWithGoogle],
  )

  const handleFailure = useCallback(() => {
    setLoading(false)
    toast({
      title: 'Falha no login com Google',
      description: 'Ocorreu um erro ao se comunicar com o Google',
      status: 'error',
    })
  }, [toast])

  const handleLoadGoogle = useCallback(() => {
    window.gapi.load('auth2', async () => {
      const client = await window.gapi.auth2.init({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        cookie_policy: 'single_host_origin',
      })

      await client.attachClickHandler(
        buttonRef.current,
        {},
        handleSuccess,
        handleFailure,
      )
    })
  }, [handleFailure, handleSuccess])

  return (
    <>
      <Script
        src="https://apis.google.com/js/platform.js"
        async
        defer
        onLoad={handleLoadGoogle}
      />
      <Button
        ref={buttonRef}
        variant="tertiary"
        onClick={() => setLoading(true)}
        full
        loading={loading}
        {...rest}
      >
        <IoLogoGoogle />
        GOOGLE
      </Button>
    </>
  )
}
