module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'Gibberish, jibberish, jibber-jabber and gobbledygook',
  // DB_CONNECTION: process.env.DB_CONNECTION || 'mongodb:27017/zoom', // docker-compose container
  DB_CONNECTION: process.env.DB_CONNECTION || 'mongodb+srv://abuteler:<password>@cluster0.2p1xm.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
  DB_PASSWORD: process.env.DB_PASSWORD || 'foobarpassword',
  DB_NAME: process.env.DB_NAME || 'creactivistas',
  DB_COLLECTION_BIG5: process.env.DB_COLLECTION_BIG5 || 'big5devtesting',
  DB_COLLECTION_ACTUS: process.env.DB_COLLECTION_ACTUS || 'actusdevtesting',
  URL: process.env.URL || 'http://localhost',
  PORT: process.env.PORT || '3000'
}
