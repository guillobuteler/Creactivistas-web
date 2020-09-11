const routes = module.exports = require('next-routes')()

routes
  .add('index', '/')
  .add('actus_index', '/actus', '/actus/index')
  .add('b5_index', '/big5', '/big5/index')
  .add('b5_test', '/big5/test/:lang?', '/big5/test')
  .add('b5_resultados', '/big5/resultados', '/big5/resultados')
  .add('b5_showResult', '/big5/resultados/:id', '/big5/showResult')
  .add('b5_creditos', '/big5/creditos', '/big5/creditos')
