import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

import { getCssText } from '@stitches'
import { globalCSS } from '@styles/globalCSS'

export default class Document extends NextDocument {
  render() {
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

          <meta name="title" content="Ordo Realitas" />
          <meta
            name="description"
            content="Ordo Realitas é uma plataforma para os jogadores de ordem paranormal rpg armazenarem seus personagens e ter uma experiência imersiva como na websérie de Ordem Paranormal."
          />
          <meta
            name="keywords"
            content="ordem paranormal, ordo realitas, rpg, ordem paranormal rpg"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ordo-realitas.com.br" />
          <meta property="og:title" content="Ordo Realitas" />
          <meta
            property="og:description"
            content="Ordo Realitas é uma plataforma para os jogadores de ordem paranormal rpg armazenarem seus personagens e ter uma experiência imersiva como na websérie de Ordem Paranormal."
          />
          <meta
            property="og:image"
            content="https://ordo-realitas.com.br/thumbnail.png"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ordo-realitas.com.br" />
          <meta property="twitter:title" content="Ordo Realitas" />
          <meta
            property="twitter:description"
            content="Ordo Realitas é uma plataforma para os jogadores de ordem paranormal rpg armazenarem seus personagens e ter uma experiência imersiva como na websérie de Ordem Paranormal."
          />
          <meta
            name="twitter:image"
            content="https://ordo-realitas.com.br/thumbnail.png"
          />

          <meta charSet="utf-8" />
          <meta name="next-head-count" content="4" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
