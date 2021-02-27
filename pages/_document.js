import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts/lato-v17-latin-regular.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/lato-v17-latin-italic.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/lato-v17-latin-900.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
        </Head>  
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument