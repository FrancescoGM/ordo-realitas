import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '../../stitches.config'
import { globalCSS } from '../styles/globalCSS'

export default class Document extends NextDocument {
  render(): JSX.Element {
    globalCSS()

    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="credentials"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />

          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
