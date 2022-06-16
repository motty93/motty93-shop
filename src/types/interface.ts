import { MicroCMSListContent, MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'

export type Queries = MicroCMSQueries

export type BodyEntity = {
  fieldId: 'richEditor' | 'html' | 'markdown'
  richText?: string
  html?: string
  markdown?: string
}

export interface IProduct extends MicroCMSListContent {
  ogimage: IMicroCmsImageType
  title: string
  description: string
  body: string
  status: string
  condition: string
  price: number
  brand: string
  categories: ICategory[]
  images?: IMicroCmsImageType[]
}

export interface ICategory extends MicroCMSListContent {
  name?: string
}

export type MicroCmsResponse<T> = MicroCMSListResponse<T>

export type ContentBase = MicroCMSListContent

export interface IMicroCmsImageType {
  url: string
  height: number
  width: number
}

// export interface IDraftResponse {
//   blog: IBlog
//   toc: TocTypes[]
//   body: string
// }

export type Response<T = any> = {
  data: T
  headers: any
}

export interface IHttpClient {
  get: <T extends object, R = Response<T>>(path: string) => Promise<R>
}
