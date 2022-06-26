import { IProduct } from '@/types'
import { convertToStatus } from '@/utils/buyStatus'
import Link from 'next/link'

type Props = {
  product: IProduct
}

export const Card: React.FC<Props> = ({ product }) => {
  const status = convertToStatus(product)

  return (
    <Link href="/[productId]" as={`/${product.id}`}>
      <a className="mb-4 w-64 shadow-xl transition hover:transform hover:duration-300 hover:-translate-y-3 cursor-pointer md:w-96 md:h-auto card card-compact bg-base-100 active:bg-base-200">
        <figure className="pt-3 md:pt-6">
          <img className="w-32 h-28 md:w-64 md:h-auto" src={`${product.ogimage.url}`} alt={product.brand} />
        </figure>
        <div className="card-body">
          <h2 className="text-sm font-bold md:text-xl card-title">{product.title}</h2>
          <div className="inline">
            <span className="text-xs md:text-sm badge badge-secondary">{product.condition}</span>
            <span className="text-xs md:text-sm badge badge-info text-white mx-2">{status}</span>
          </div>
          <p className="text-xs md:text-base">¥{product.price.toLocaleString()}</p>
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
