/* eslint-disable @next/next/no-css-tags */
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
          <link rel="stylesheet" href="/css/animate.css" type="text/css" />
          <link rel="stylesheet" href="/css/owl.carousel.css" type="text/css" />
          <link
            rel="stylesheet"
            href="/css/magnific-popup.css"
            type="text/css"
          />
          <link
            rel="stylesheet"
            href="/css/jquery.countdown.css"
            type="text/css"
          />
          <link rel="stylesheet" href="/css/style.css" type="text/css" />
          <link
            rel="stylesheet"
            href="/css/animsition.min.css"
            type="text/css"
          />

          <link rel="stylesheet" href="/css/bg.css" type="text/css" />

          <link
            rel="stylesheet"
            href="/css/color.css"
            type="text/css"
            id="colors"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
            integrity="sha384-df4e8b8e1a53841656832rSNoz7on5+e2lvzbc/2S6tF8cPzT2ZZK+Uk7KAqkjq"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
