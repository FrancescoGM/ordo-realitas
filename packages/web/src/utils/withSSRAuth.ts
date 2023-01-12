import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'

import { parseCookies } from 'nookies'

import { signOut } from '../contexts/AuthContext'
import { AuthTokenError } from '../services/errors/AuthTokenError'

type Prop = { [key: string]: any }

function emptyFunction<P extends Prop>(): GetServerSidePropsResult<P> {
  return {
    props: {} as P,
  }
}

export function withSSRAuth<P extends Prop = Prop>(fn?: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext<P>,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    if (!cookies['@ordo_realitas:x-access-token']) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
      }
    }

    try {
      if (fn) {
        return await fn(ctx)
      } else {
        return emptyFunction()
      }
    } catch (error) {
      if (error instanceof AuthTokenError) {
        signOut(ctx as any, { redirect: false })

        return {
          redirect: {
            destination: '/signin',
            permanent: false,
          },
        }
      } else {
        return emptyFunction()
      }
    }
  }
}
