type Props = {
  title: string
  description: string
  pageUrl: string
  pageImgUrl: string
}

export const Meta: React.FC<Props> = ({ title, description, pageUrl, pageImgUrl }) => (
  <>
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
  </>
)
