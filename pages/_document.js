import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Voting online - smart - secure - fast - anonymous"
          />
          <meta name="keywords" content="vote, votee" />
          <meta property="og:title" content="Votee - voting redesigned" />
          <meta
            property="og:description"
            content="Voting online - smart - secure - fast - anonymous"
          ></meta>
          <meta property="og:url" content="https://votee.beeinger.now.sh/" />
          <meta property="og:image" content="/example.jpg"></meta>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <meta property="og:locale" content="pl_PL" />
          <meta name="language" content="en" />
          <meta name="author" content="Maciej Sułecki" />
          <meta name="theme-color" content="#494949" />
          <meta name="msapplication-TileColor" content="#494949" />
          <meta
            name="msapplication-TileImage"
            content="/icons/icon-144x144.png"
          />
          <meta name="application-name" content="Votee" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Abel&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
