import { config } from '@/site.config'
import { getAllProducts } from '@/utils'
import { formatDate } from '../utils/DateUtil'

export const generateSitemapXml = async (): Promise<string> => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>`
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  const products = await getAllProducts()
  if (!products.contents) {
    return xml
  }

  products.contents.forEach((product) => {
    xml += `<url>
        <loc>${config.baseUrl}/${product.id}</loc>
        <lastmod>${formatDate(product.createdAt, 'YYYY-MM-DD')}</lastmod>
        <changefreq>weekly</changefreq>
      </url>`
  })

  xml += `</urlset>`

  return xml
}
