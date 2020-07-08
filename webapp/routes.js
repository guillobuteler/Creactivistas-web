const routes = module.exports = require('next-routes')()

routes
  .add('index', '/')
  .add('test', '/test/:lang?')
  .add('resultados', '/resultados')
  .add('showResult', '/resultados/:id')
  .add('creditos', '/creditos')
  .add('compare', '/compare')
  .add('showCompare', '/compare/:id', 'showCompare')
