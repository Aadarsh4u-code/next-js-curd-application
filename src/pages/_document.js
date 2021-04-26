import React from 'react';
import Document, {Html, Head, Main, NextScript} from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <>
        <Html lang={"en"}>
          <Head>
            <title>CURD APP</title>
            <meta property={"custom"} content={"next curd application"} />
          </Head>
          <body>
          <Main />
          <NextScript />
          </body>
        </Html>
      </>
    )
  }
}