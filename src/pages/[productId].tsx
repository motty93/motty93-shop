import { Breadcrumb, Header } from '@/components'
import { IProduct } from '@/types'
import { getAllProducts, getProductById } from '@/utils'
import { GetStaticPropsContext, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Zoom from 'react-medium-image-zoom'

type Props = {
  product: IProduct
}

const Product: NextPage<Props> = ({ product }) => {
  const router = useRouter()
  const [preview, setPreview] = useState(product.ogimage.url)
  const onSelectPreview = (e) => setPreview(e.target.src)

  if (router.isFallback) {
    return <>loading</>
  }

  return (
    <>
      <Header />
      <div className="mx-auto max-w-screen-md md:max-w-screen-lg">
        <div className="flex flex-col my-2">
          <Breadcrumb product={product} />
          <h1 className="my-4 text-2xl font-bold">
            {product.title}
            <span className="badge badge-info text-white mx-2">{product.status}</span>
          </h1>
          {product.categories.map((category) => (
            <span className="badge badge-primary" key={category.id}>
              {category.name}
            </span>
          ))}
          <div className="flex flex-col my-6">
            <div className="w-6/12 mx-auto cursor-pointer">
              <Zoom overlayBgColorStart="rgba(255,255,255,0)" overlayBgColorEnd="rgba(0, 0, 0, 0.89)">
                {preview && (
                  <Image
                    src={preview}
                    alt="ogimage"
                    width={product.ogimage.width}
                    height={product.ogimage.height}
                    priority={true}
                  />
                )}
              </Zoom>
            </div>
            <div className="flex justify-center my-4 h-20">
              <p className="relative cursor-pointer mx-3 rounded-md w-20">
                {preview && (
                  <Image
                    src={`${product.ogimage.url}?w=820&q=100`}
                    layout="fill"
                    alt="image"
                    onClick={onSelectPreview}
                    priority={false}
                  />
                )}
              </p>
              {product.images &&
                product.images.map((image) => (
                  <p className="relative cursor-pointer mx-3 rounded-md w-20">
                    <Image
                      key={image.url}
                      src={image.url}
                      layout="fill"
                      alt="image"
                      onClick={onSelectPreview}
                      priority={false}
                    />
                  </p>
                ))}
              <p className="relative cursor-pointer mx-3 rounded-md w-20">
                <Image
                  src="https://placeimg.com/300/300/any"
                  layout="fill"
                  alt="image"
                  onClick={onSelectPreview}
                  priority={false}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
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

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const productId: any = context.params?.productId || '1'
  const product = await getProductById(productId)

  return {
    props: {
      product,
    },
  }
}

export default Product
