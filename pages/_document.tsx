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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
