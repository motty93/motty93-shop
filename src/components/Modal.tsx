import { IProduct } from '@/types'
import { useRouter } from 'next/router'

type Props = {
  product: IProduct
}

export const Modal: React.FC<Props> = ({ product }) => {
  const router = useRouter()
  const onPurchaseApply = () => {
    router.push(`/api/purchase?id=${product.id}`)
  }

  return (
    <>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold pb-2">申し込み前確認</h3>
          <p className="py-4">
            購入申し込みをすると、販売者にLINE通知が届きます。
            <br />
            マジで購入しますか？
          </p>
          <div className="modal-action">
            <button className="btn" onClick={onPurchaseApply}>
              購入する
            </button>
          </div>
        </label>
      </label>
    </>
  )
}
