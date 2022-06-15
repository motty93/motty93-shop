const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  images: {
    domains: [
      'images.microcms-assets.io',
      'i.gyazo.com',
      'grandsaisonmotty.imgix.net',
      'placeimg.com',
      'localhost',
    ],
  },
}

module.exports = nextConfig
