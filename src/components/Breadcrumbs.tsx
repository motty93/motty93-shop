import { IProduct } from '@/types'
import Link from 'next/link'

type Props = {
  product?: IProduct
  title?: string
}

export const Breadcrumb: React.FC<Props> = (props) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        <li>
          <Link href="/">
            <a>ホーム</a>
          </Link>
        </li>
        <li>{props.product ? props.product.title : props.title}</li>
      </ul>
    </div>
  )
}
