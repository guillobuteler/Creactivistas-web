const withOffline = require('next-offline')
const { URL, PORT } = require('./config')

module.exports = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    URL,
    PORT
  },
  ...withOffline()
}
