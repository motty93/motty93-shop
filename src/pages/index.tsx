import { Products } from '@/components'
import { GetStaticPropsContext, NextPage } from 'next'

type Props = {
  title: string
  description: string
}

/**
 * Return main component
 *
 */

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <Products />
    </>
  )
}

/**
 * props
 *
 */

export async function getStaticProps(context: GetStaticPropsContext) {
  // context取得するなら
  // const page: any = context.params || '1'
  const allProducts = {}

  return {
    props: { allProducts },
  }
}

export default Home
