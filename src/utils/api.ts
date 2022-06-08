// microcms-js-sdkを使うと例外がはかれるため暫定対応
// import { config } from '@/site.config'
// import { createClient } from 'microcms-js-sdk'
//
// export const client = createClient({
//   serviceDomain: config.serviceId,
//   apiKey: config.apiKey,
// })

import { config } from '@/site.config'
import { ICategory, IProduct, MicroCmsResponse } from '@/types'
import axios from 'axios'

const apiRoot = `https://${config.serviceId}.microcms.io/api/v1`

export const getAllBlogs = async (): Promise<MicroCmsResponse<IProduct>> => {
  const res = await axios.get(`${apiRoot}/products?limit=${config.defaultMaxLimit}`, {
    headers: { 'X-MICROCMS-API-KEY': config.apiKey },
  })
  return res.data
}

export const getCategories = async (): Promise<MicroCmsResponse<ICategory>> => {
  const res = await axios.get(`${apiRoot}/categories`, {
    headers: { 'X-MICROCMS-API-KEY': config.apiKey },
  })
  return res.data
}
