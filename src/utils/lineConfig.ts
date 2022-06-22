import qs from 'querystring'

const LINE_NOTIFY_API_URL = 'https://notify-api.line.me/api/notify'
const LINE_NOTIFY_ACCESS_TOKEN = process.env.LINE_NOTIFY_ACCESS_TOKEN

export const lineConfig = (productName: string) => {
  return {
    url: LINE_NOTIFY_API_URL,
    method: 'post',
    headers: {
      'Context-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${LINE_NOTIFY_ACCESS_TOKEN}`,
    },
    data: qs.stringify({ message: `${productName}に注文が入りました！` }),
  }
}
