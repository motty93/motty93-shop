import { IProduct } from '@/types'
import { NextPage } from 'next'
import Link from 'next/link'

type Props = {
  product: IProduct
}

export const Card: NextPage<Props> = ({ product }) => (
  <Link href="/[productId]" as={`/${product.id}`}>
    <a className="w-64 md:w-96 md:h-auto shadow-xl hover:shadow-2xl hover:cursor-pointer mb-4 card card-compact bg-base-100 active:bg-base-200">
      <figure className="pt-3 md:pt-6">
        <img className="w-32 md:w-64 h-28 md:h-auto" src={`${product.ogimage.url}`} alt={product.brand} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-sm font-bold md:text-xl">{product.title}</h2>
        <div className="badge badge-secondary text-xs md:text-sm">{product.condition}</div>
        <p className="whitespace-pre-wrap text-xs md:text-base">{product.description}</p>
        <div className="justify-end card-actions">
          {product.categories.map((category) => (
            <div className="hover:bg-sky-200 badge badge-primary text-xs" key={category.id}>
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </a>
  </Link>
)
