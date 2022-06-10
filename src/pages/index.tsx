import { Card, Hero } from '@/components'
import { IProduct } from '@/types'
import { getAllProducts } from '@/utils'
import { NextPage } from 'next'

type Props = {
  products?: IProduct[]
}

const Home: NextPage<Props> = ({ products }) => (
  <>
    <Hero />
    <main className="m-14 h-1/2 md:h-full">
      <h1 className="mb-6 text-xl md:text-2xl font-bold text-center">出品してる商品</h1>
      <div className="flex flex-wrap justify-center items-center gap-7">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
        <div className="w-96"></div>
        <div className="w-96"></div>
      </div>
    </main>
  </>
)

export const getStaticProps = async () => {
  const data = await getAllProducts()

  return {
    props: {
      products: data.contents,
    },
  }
}

export default Home
