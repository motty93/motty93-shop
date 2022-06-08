import { Products } from '@/components'
import { IProduct } from '@/types'
import { getAllProducts } from '@/utils'
import { NextPage } from 'next'

type Props = {
  products?: IProduct[]
}

const Home: NextPage<Props> = (props) => {
  return (
    <>
      <div>{props.products[0]?.description}</div>
      <Products />
    </>
  )
}

// export async function getStaticPaths() {
//   const products = await getAllProducts()
//   const ids = products.contents.map((product) => {
//     return { params: { productId: product.id } }
//   })
//
//   return {
//     paths: ids,
//     fallback: true,
//   }
// }

// export async function getStaticProps(context: GetStaticPropsContext) {
export async function getStaticProps() {
  // const blogId: any = context.params?.productId || '1'
  const products = await getAllProducts()

  return {
    props: {
      products: products,
    },
  }
}

export default Home
