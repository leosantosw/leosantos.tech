module.exports = {
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp3)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      }
    })

    if (isServer) {
      require('./scripts/generateSitemap')
    }

    return config
  }
}
