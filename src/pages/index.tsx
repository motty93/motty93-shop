import { NextPage, GetStaticPropsContext } from 'next'
import { Products } from '@/components'

type Props = {}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Products />
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  // context取得するなら
  // const page: any = context.params || '1'
  const allProducts = {}

  return {
    props: { allProducts },
  }
}

export default Home
