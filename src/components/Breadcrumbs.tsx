import { IProduct } from '@/types'
import Link from 'next/link'

type Props = {
  product: IProduct
}

export const Breadcrumb: React.FC<Props> = ({ product }) => {
  console.log(product)

  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <a>商品一覧</a>
          </Link>
        </li>
        <li>{product.title}</li>
      </ul>
    </div>
  )
}
