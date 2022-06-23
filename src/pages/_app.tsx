import { Footer, Meta } from '@/components'
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
        <Meta title={title} pageUrl={pageUrl} description={description} pageImgUrl={pageImgUrl} />
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
