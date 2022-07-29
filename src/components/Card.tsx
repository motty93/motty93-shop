import { IProduct } from '@/types'
import { convertToStatus } from '@/utils/buyStatus'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  product: IProduct
}

export const Card: React.FC<Props> = ({ product }) => {
  const status = convertToStatus(product)

  return (
    <Link href="/[productId]" as={`/${product.id}`}>
      <a className="mb-4 w-64 h-96 shadow-xl transition hover:duration-300 hover:-translate-y-3 cursor-pointer md:w-96 md:h-auto card card-compact bg-base-100 active:bg-base-200">
        <figure className="pt-3 m-auto w-6/12 h-full md:pt-6 md:w-auto md:h-auto">
          <Image
            src={`${product.ogimage.url}?w=820`}
            alt={product.brand}
            width={product.ogimage.width}
            height={product.ogimage.height}
            priority={false}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-sm font-bold md:text-xl card-title">{product.title}</h2>
          <div className="inline">
            <span className="text-xs md:text-sm badge badge-secondary">{product.condition}</span>
            <span className="mx-2 text-xs text-white md:text-sm badge badge-info">{status}</span>
          </div>
          <p className="text-xs md:text-base">
            {product.discount ? (
              <>
                <span className="line-through">¥{product.price}</span>
                <span className="ml-1 text-red-400">
                  ¥{(product.price - product.discount).toLocaleString()}
                </span>
              </>
            ) : (
              <span>¥{product.price.toLocaleString()}</span>
            )}
          </p>
          <p className="text-xs whitespace-pre-wrap md:text-base">{product.description}</p>
          <div className="justify-end card-actions">
            {product.categories.map((category) => (
              <div className="text-xs hover:bg-sky-200 badge badge-primary" key={category.id}>
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
