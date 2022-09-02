import { GetServerSideProps } from 'next'
import { useEffect } from 'react'

import { useAuth } from '@hooks/useAuth'
import { api } from '@services/api'
import { withSSRAuth } from '@utils/withSSRAuth'

export default function Dashboard(): JSX.Element {
  const { user } = useAuth()

  useEffect(() => {
    api.get('/sessions/refresh/user')
  }, [])

  return (
    <div>
      <h1>dashboard</h1>
      <p>{user?.name}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withSSRAuth()
