export const config = {
  siteMeta: {
    title: 'THE SHOP MOT',
    description: '不要になったものを販売する\nもてぃのECサイト',
  },
  baseUrl: process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEURL : 'http://localhost:3000',
  baseDraftUrl:
    process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_DRAFT_BASEURL : 'http://localhost:3000',
  apiKey: process.env.MICROCMS_APIKEY || '',
  serviceId: process.env.SERVICE_ID || '',
  headerLinks: [],
  defaultLimit: process.env.NEXT_PUBLIC_DEFAULT_LIMIT ?? '10',
  defaultMaxLimit: 50,
}
