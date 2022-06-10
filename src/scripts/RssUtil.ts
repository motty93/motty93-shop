import RSS from 'rss'
import { config } from '@/site.config'
import { getAllProducts } from '@/utils'

export const generateFeedXml = async (): Promise<string> => {
  const feed = new RSS({
    title: config.siteMeta.title,
    description: config.siteMeta.description,
    site_url: config.baseUrl,
    feed_url: '/pages/feed',
    language: 'ja',
  })
  const products = await getAllProducts()

  products.contents.forEach((product) => {
    feed.item({
      title: product.title,
      description: product.description,
      date: new Date(product.createdAt),
      url: `${config.baseUrl}/${product.id}`,
    })
  })

  return feed.xml()
}
