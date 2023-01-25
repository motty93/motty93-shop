import { IProduct } from '@/types'
import Link from 'next/link'

type Props = {
  product?: IProduct
  title?: string
}

export const Breadcrumb: React.FC<Props> = (props) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
          <Link href="/#products">
            <a>ホーム</a>
          </Link>
        </li>
        <li>{props.product ? props.product.id : props.title}</li>
      </ul>
    </div>
  )
}
