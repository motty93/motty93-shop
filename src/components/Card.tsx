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
      <a className="card card-compact mb-4 h-96 w-64 cursor-pointer bg-base-100 shadow-xl transition hover:-translate-y-3 hover:duration-300 active:bg-base-200 md:h-auto md:w-96">
        <figure className="m-auto h-full w-6/12 pt-3 md:h-auto md:w-auto md:pt-6">
          <Image
            src={`${product.ogimage.url}?w=820`}
            alt={product.brand}
            width={product.ogimage.width}
            height={product.ogimage.height}
            priority={false}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm font-bold md:text-xl">{product.title}</h2>
          <div className="inline">
            <span className="badge badge-secondary text-xs md:text-sm">{product.condition}</span>
            <span className="badge badge-info mx-2 text-xs text-white md:text-sm">{status}</span>
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
          <p className="whitespace-pre-wrap text-xs md:text-base">{product.description}</p>
          <div className="card-actions justify-end">
            {product.categories.map((category) => (
              <div className="badge badge-primary text-xs hover:bg-sky-200" key={category.id}>
                {category.name}
              </div>
            ))}
          </div>
        </div>
      </a>
    </Link>
  )
}
