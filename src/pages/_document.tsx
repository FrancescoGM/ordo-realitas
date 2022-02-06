import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '../../stitches.config'
import { globalCSS } from '../styles/globalCSS'

export default class Document extends NextDocument {
  render(): JSX.Element {
    globalCSS()

    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="use-credentials"
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

          {/* Meta tags */}

          <meta name="robots" content="all" />

          <meta
            name="keywords"
            content="ordem paranormal, ordo realitas, rpg, ordem paranormal rpg"
          />

          <meta name="description" content="Ordo Realitas" />

          <meta property="og:site_name" content="Ordo Realitas" />
          <meta property="og:title" content="Ordo Realitas" />
          <meta
            property="og:description"
            content="Ordo Realitas é uma plataforma para os jogadores de ordem 
            paranormal rpg armazenarem seus personagens e ter uma experiência 
            imersiva como na websérie de Ordem Paranormal"
          />
          <meta property="og:image" content="/thumbnail.webp" />
          <meta property="og:image:type" content="image/webp" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:title" content="Ordo Realitas" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:description"
            content="Ordo Realitas é uma plataforma para os jogadores de ordem 
            paranormal rpg armazenarem seus personagens e ter uma experiência 
            imersiva como na websérie de Ordem Paranormal"
          />
          <meta name="twitter:image" content="/thumbnail.webp" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
