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
    <main className={`m-14 h-auto ${products.length < 5 && 'md:h-full'}`}>
      <h1 className="mb-6 text-center text-xl font-bold md:text-2xl" id="product-title">
        <span id="products">いらないもの一覧</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-7">
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
