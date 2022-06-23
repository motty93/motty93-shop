import Document, { Html, Head, Main, NextScript } from 'next/document'
import { config } from '@/site.config'

export default class MyDocument extends Document {
  render() {
    const title = config.siteMeta.title
    const pageUrl = config.baseUrl
    const description = config.siteMeta.description
    const pageImgUrl = pageUrl + '/images/hero.jpg'

    return (
      <Html>
        <Head>
          <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0" />
            <meta name="description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@smo_t93" />
            <meta name="color-scheme" content="light dark" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={pageUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:site" content={title} />
            <meta property="og:site_name" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={pageImgUrl} />
            <link rel="canonical" href={pageUrl} />
            <link rel="icon" href="/favicon.ico" />
          </Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
