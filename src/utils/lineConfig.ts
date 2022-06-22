import { IProduct } from '@/types'
import qs from 'querystring'

const LINE_NOTIFY_BASE_URL = 'https://notify-api.line.me'
const LINE_NOTIFY_API_PATH = '/api/notify'
const LINE_NOTIFY_ACCESS_TOKEN = process.env.LINE_NOTIFY_ACCESS_TOKEN

export const lineConfig = (product: IProduct) => {
  return {
    url: LINE_NOTIFY_BASE_URL + LINE_NOTIFY_API_PATH,
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Context-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest',
      Authorization: `Bearer ${LINE_NOTIFY_ACCESS_TOKEN}`,
    },
    data: qs.stringify({
      message: `${product.title}に注文が入りました！\n https://motty93-shop.microcms.io/apis/products/${product.id}`,
    }),
  }
}
