import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <link rel="preload" href="/fonts/lato-v17-latin-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" href="/fonts/lato-v17-latin-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" href="/fonts/lato-v17-latin-900.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="icon" href="/favicon.ico"/>
        </Head>  
        <body className="dark">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument