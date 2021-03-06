import { Footer } from '@/components'
import { config } from '@/site.config'
import '@/styles/globals.scss'
import { GA_TRACKING_ID } from '@/utils'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  const title = config.siteMeta.title
  const pageUrl = config.baseUrl
  const description = config.siteMeta.description
  const pageImgUrl = pageUrl + '/images/hero.jpg'

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta name="color-scheme" content="light dark" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={pageImgUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@smo_t93" />
        <meta name="twitter:url" content={pageImgUrl} />
        <meta name="twitter:image" content={pageImgUrl} />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script id="tagManager" async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
      <Script
        id="gtag"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
        }}
      />
      <Script
        id="lazysizes"
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js"
        integrity="sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=="
        crossOrigin="anonymous"
      />
      <div className="h-screen">
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

const MyAppWrapper = (props: AppProps) => (
  <RecoilRoot>
    <MyApp {...props} />
  </RecoilRoot>
)

export default MyAppWrapper
