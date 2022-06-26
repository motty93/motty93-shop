import { MicroCMSListContent, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'

export type Queries = MicroCMSQueries

export type BodyEntity = {
  fieldId: 'richEditor' | 'html' | 'markdown'
  richText?: string
  html?: string
  markdown?: string
}

export type BuyingStatus = 'buying' | 'sold' | 'negotiation' | 'delivery' | 'suspension'

export interface IProduct extends MicroCMSListContent {
  ogimage: IMicroCmsImageType
  title: string
  description: string
  body: string
  status: BuyingStatus[]
  condition: string
  price: number
  brand: string
  applied: boolean
  categories: ICategory[]
  images?: ProductImage[]
}

export interface ICategory extends MicroCMSListContent {
  name?: string
}

export type MicroCmsResponse<T> = MicroCMSListResponse<T>

export type ContentBase = MicroCMSListContent

export interface ProductImage {
  id: string
  product_image: IMicroCmsImageType
}

export interface IMicroCmsImageType {
  url: string
  height: number
  width: number
}

export type Response<T = any> = {
  data: T
  headers: any
}

export interface IHttpClient {
  get: <T extends object, R = Response<T>>(path: string) => Promise<R>
}
