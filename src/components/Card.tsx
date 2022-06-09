import { IProduct } from '@/types'
import { NextPage } from 'next'

type Props = {
  product: IProduct
}

export const Card: NextPage<Props> = ({ product }) => (
  <div className="w-96 shadow-xl hover:shadow-2xl hover:cursor-pointer mb-4 card card-compact bg-base-100 active:bg-base-200">
    <figure>
      <img src={`${product.ogimage.url}?w=400&h=225`} alt={product.brand} />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{product.title}</h2>
      <div className="badge badge-secondary">{product.condition}</div>
      <p className="whitespace-pre-wrap">{product.description}</p>
      <div className="justify-end card-actions">
        {product.categories.map((category) => (
          <div className="hover:bg-sky-200 badge badge-primary" key={category.id}>
            {category.name}
          </div>
        ))}
      </div>
    </div>
  </div>
)
