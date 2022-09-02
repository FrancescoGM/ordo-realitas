import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'

import { parseCookies } from 'nookies'

function emptyFunction<P>(): GetServerSidePropsResult<P> {
  return {
    props: {} as P,
  }
}

export function withSSRGuest<P = unknown>(fn?: GetServerSideProps<P>) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    if (cookies['@ordo_realitas:x-access-token']) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }

    if (fn) {
      return await fn(ctx)
    } else {
      return emptyFunction()
    }
  }
}
