module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          crypto: require.resolve('crypto-browserify'),
          buffer: require.resolve('buffer'),
          process: require.resolve('process/browser'),
          stream: require.resolve('stream-browserify'),
          http: require.resolve('stream-http'),
          https: require.resolve('https-browserify'),
          os: require.resolve('os-browserify'),
        }
      }
    }
  },
}
