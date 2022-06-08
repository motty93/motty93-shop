// import { config } from '@/site.config'
// import { ICategory, IProduct, MicroCmsResponse } from '@/types'
//
// export const getAllProducts = async (): Promise<MicroCmsResponse<IProduct>> => {
//   const res = await client.get<MicroCmsResponse<IProduct>>({
//     endpoint: 'products',
//     queries: { limit: config.defaultMaxLimit },
//   })
//
//   return res
// }
//
// export const getCategories = async (): Promise<MicroCmsResponse<ICategory>> => {
//   const res = await client.get<MicroCmsResponse<ICategory>>({
//     endpoint: 'categories',
//   })
//
//   return res
// }
//
export const getAllProducts = () => {
  return 'products'
}
