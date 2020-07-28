import { CreactivistasLayout } from '../components/creactivistas'
import App from 'next/app'
import React from 'react'
// import { Router } from '../routes'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx, ctx: { query, req } }) {
    let componentProps = {}
    const path = req && req.url ? req.url : router.pathname
    const countryCode = req && req.requestCountryCode ? req.requestCountryCode.toLowerCase() : 'es'
    // const ip = ctx && ctx.req ? ctx.req.socket.remoteAddress : false
    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx)
    }
    const pageProps = Object.assign({}, componentProps, { query, path, countryCode })
    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props
    return (
      <CreactivistasLayout>
        <Component {...pageProps} />
      </CreactivistasLayout>
    )
  }
}
