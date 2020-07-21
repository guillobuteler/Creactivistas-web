module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Gibberish, jibberish, jibber-jabber and gobbledygook',
  // DB_CONNECTION: process.env.DB_CONNECTION || 'mongodb:27017/zoom', // docker-compose container
  DB_CONNECTION: process.env.DB_CONNECTION || 'mongodb+srv://abuteler:OOiYYk0RrX880xPX@cluster0.2p1xm.gcp.mongodb.net/actus?retryWrites=true&w=majority',
  DB_NAME: process.env.DB_NAME || 'actus',
  DB_COLLECTION: process.env.DB_COLLECTION || 'big5devtesting',
  URL: process.env.URL || 'http://localhost:3000'
}
