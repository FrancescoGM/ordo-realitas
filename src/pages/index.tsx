import { GetServerSideProps } from 'next'

export default function Main(): JSX.Element {
  return <></>
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/signin',
      permanent: false
    }
  }
}
