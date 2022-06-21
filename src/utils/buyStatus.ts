import { IProduct } from '@/types'

export const convertToStatus = (product: IProduct) => {
  const status = product.status[0]

  switch (status) {
    case 'buying':
      return '販売中'
    case 'sold':
      return '売り切れ'
    case 'negotiation':
      return '商談中'
    case 'delivery':
      return '配送中'
    default:
      return '販売中止'
  }
}
