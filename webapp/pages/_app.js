import { CreactivistasLayout } from '../components/creactivistas'
import App from 'next/app'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, router, ctx, ctx: { query, req } }) {
    let componentProps = {}
    const path = req && req.url ? req.url : false
    console.log(req && req.url, router.pathname, 'path-> ', path)
    if (Component.getInitialProps) {
      componentProps = await Component.getInitialProps(ctx)
    }
    const pageProps = Object.assign({}, componentProps, { query, path })
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
