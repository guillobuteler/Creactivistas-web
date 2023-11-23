[![Build Status](https://travis-ci.org/Alheimsins/bigfive-web.svg?branch=master)](https://travis-ci.org/Alheimsins/bigfive-web)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# Creactivistas webapp
Basada en el proyecto de codigo abierto del test de personalidad del modelo de 5 factores conocido como Big 5 (https://github.com/Alheimsins/bigfive-web) distribuido bajo la licencia MIT.


## Instrucciones
### Uso en dev:
1. Instalar [nodejs](https://nodejs.org) versión 12.x,
2. Clonar este repo.
3. Correr `npm install` (o `yarn install`) en una terminal.
4. Correr `npm run dev`
5. Ir a `localhost:3000`

### Opcional Docker (requiere actualizarlo)
#### Uso en dev:
1. Instalar [Docker](https://www.docker.com/).
2. Correr `docker-compose build` en una terminal.
3. Correr `docker-compose up -d`. (d por dettached/headless)
4. Ir a `localhost:3000`
#### Uso de MongoDB en container
[referencia](https://www.thepolyglotdeveloper.com/2019/01/getting-started-mongodb-docker-container-deployment/)
(no hacen faltan estos pasos porque la base y la colección se crean automáticamente en el primer uso)
1. `docker exec -it mongodb bash`
2. `mongo`
3. `show dbs`
4. `use zoom`
5. `db.createCollection('big5results')`

## Referencias del bigfive-web de Alheimsins
Website for five factor model of personality based on work from [IPIP-NEO-PI](https://github.com/kholia/IPIP-NEO-PI).
Tests and evaluation is gathered from [ipip.ori.org](http://ipip.ori.org).
See it live @ [bigfive-test.com](https://bigfive-test.com)
Written in [nodejs](https://nodejs.org) using the [next.js](https://github.com/zeit/next.js) and [micro](https://github.com/zeit/micro) framework
