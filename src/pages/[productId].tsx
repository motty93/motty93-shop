import { getAllProducts } from '@/utils'
import { GetStaticPropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'

const Product: NextPage = () => {
  const router = useRouter()
  if (router.isFallback) {
    return <>loading</>
  }

  return <>hello</>
}

export const getStaticPaths = async () => {
  const data = await getAllProducts()
  const ids = data.contents.map((product) => {
    return { params: { productId: product.id } }
  })

  return {
    paths: ids,
    fallback: false, //上記以外のパスでアクセスすると404
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const productId: any = context.params?.productId || '1'
  const product = { id: productId }

  return {
    props: {
      product,
    },
  }
}

export default Product
