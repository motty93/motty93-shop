import { Breadcrumb, Header, Meta, Modal } from '@/components'
import { convertToHtml } from '@/scripts/htmlUtil'
import { config } from '@/site.config'
import { IProduct } from '@/types'
import { getAllProducts, getProductById } from '@/utils'
import { convertToStatus } from '@/utils/buyStatus'
import DOMPurify from 'dompurify'
import { GetStaticPropsContext, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'

type Props = {
  product: IProduct
  body: string
  pageUrl: string
}

const Product: NextPage<Props> = ({ product, body, pageUrl }) => {
  const router = useRouter()
  const status = convertToStatus(product)
  const [preview, setPreview] = useState<string>('')
  const [check, setCheck] = useState<boolean>(false)
  const [htmlString, setHtmlString] = useState<string>('')

  const onSelectPreview = (e) => setPreview(e.target.src)
  const onClickChecked = () => setCheck(!check)

  useEffect(() => {
    if (body) {
      // XSS対策
      setHtmlString(DOMPurify.sanitize(body))
    }
    setPreview(product.ogimage.url)
  }, [htmlString, preview])

  useEffect(() => {
    if (htmlString.length > 0) {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.setAttribute('src', '//www.instagram.com/embed.js')
      s.setAttribute('async', 'true')
      document.head.appendChild(s)

      if ((window as any).instgrm) {
        ;(window as any).instgrm.Embeds.process()
      }
    }
  }, [htmlString])

  if (router.isFallback) {
    return <>loading</>
  }
  // console.log(product.ogimage.url)
  // console.log(product.images[0].product_image.url)

  return (
    <>
      <Meta
        title={product.title}
        description={product.description}
        pageUrl={pageUrl}
        pageImgUrl={product.ogimage.url}
      />
      <Header />
      <div className="mx-10 lg:mx-auto max-w-screen-md md:max-w-screen-lg">
        <div className="flex flex-col my-2">
          <Breadcrumb product={product} />
          <span className="badge badge-info text-white my-2 lg:my-4">{status}</span>
          <h1 className="flex items-center lg:text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center">
            カテゴリー
            {product.categories.map((category) => (
              <span className="badge badge-primary ml-2" key={category.id}>
                {category.name}
              </span>
            ))}
          </div>
          <div className="my-3 text-xl">参考価格：{product.price}円</div>
          <div className="flex flex-col my-6">
            <div className="md:w-6/12 mx-auto text-center">
              <Zoom overlayBgColorStart="rgba(255,255,255,0)" overlayBgColorEnd="rgba(0, 0, 0, 0.89)">
                {preview && (
                  <Image
                    src={`${preview}?w=820&q=100`}
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
                    objectFit="contain"
                    alt="image"
                    onClick={onSelectPreview}
                    priority={false}
                  />
                )}
              </p>
              {product.images &&
                product.images.map((image) => (
                  <p className="relative cursor-pointer mx-3 rounded-md w-20" key={image.id}>
                    <Image
                      src={`${image.product_image.url}?w=820&q=100`}
                      layout="fill"
                      objectFit="contain"
                      alt="image"
                      onClick={onSelectPreview}
                      priority={false}
                    />
                  </p>
                ))}
            </div>
          </div>
          <div className="flex flex-col">
            <div className="collapse collapse-arrow bg-base-100 rounded-box md:w-1/2 md:mx-auto">
              <input type="checkbox" className="peer" />
              <div className="collapse-title md:text-xl font-medium">出品理由</div>
              <div className="collapse-content">
                <p className="md:text-lg whitespace-pre-wrap">{product.description}</p>
              </div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 rounded-box md:w-1/2 mx-auto">
              <input type="checkbox" className="peer" />
              <div className="collapse-title md:text-xl font-medium">商品説明</div>
              <div className="collapse-content">
                <div className="md:text-lg whitespace-pre-wrap">
                  {htmlString.length > 0 && (
                    <div className="post" dangerouslySetInnerHTML={{ __html: htmlString }} />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5 md:my-10 mx-auto">
            {product.status[0] === 'buying' ? (
              <>
                <p className="flex items-center">
                  <input
                    type="checkbox"
                    checked={check}
                    className="checkbox my-3 mr-2"
                    onChange={onClickChecked}
                  />
                  <Link href="/about">
                    <a className="underline" target="_blank" onClick={onClickChecked}>
                      このサイトについて
                    </a>
                  </Link>
                  を確認して同意
                </p>
                <label htmlFor="my-modal" className={`btn btn-${check ? 'active' : 'disabled'} modal-button`}>
                  申し込む
                </label>
                <Modal product={product} />
              </>
            ) : (
              <p className="flex items-center">
                この商品は{status}です。
                <Link href="https://twitter.com/smo_t93">
                  <a className="underline" target="_blank">
                    管理者にお問い合わせ下さい。
                  </a>
                </Link>
              </p>
            )}
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
  const body = convertToHtml(product.body)
  const pageUrl = config.baseUrl + product.id

  return {
    props: {
      product,
      body,
      pageUrl,
    },
  }
}

export default Product
