import * as React from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "../styles/theme";
import createEmotionCache from "../components/create-emotion-cache";
import Script from "next/script";

export function addStructuredData(page: "home" | "resources" = "home") {
  if (page === "resources") {
    return {
      __html: `{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Resources for coders in San Luis Obispo county",
          "image": ["https://www.slocountycoders.com/favicon/android-chrome-512x512.png"],
          "url": "https://www.slocountycoders.com/resources/",
          "logo": "https://www.slocountycoders.com/favicon/favicon-32x32.png",
          "description": "A community of coders, developers, and programmers gathering for friendship, support, fun, and inspiration.",
          "email": "contact@slocountycoders.com"
        }`,
    };
  }

  return {
    __html: `{
        "@context": "https://schema.org",
        "@type": "Organization",
        "image": ["https://www.slocountycoders.com/favicon/android-chrome-512x512.png"],
        "url": "https://www.slocountycoders.com/",
        "logo": "https://www.slocountycoders.com/favicon/favicon-32x32.png",
        "name": "SLO County Coders",
        "description": "A community of coders, developers, and programmers gathering for friendship, support, fun, and inspiration.",
        "email": "contact@slocountycoders.com"
      }`,
  };
}

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* google analytics */}
          <Script
            strategy="afterInteractive"
            id="google-analytics-1"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-8YH73YEWW4"
          />
          <Script strategy="afterInteractive" id="google-analytics-2">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-8YH73YEWW4');
            `}
          </Script>

          {/* google tag manager */}
          <Script strategy="afterInteractive" id="google-analytics-2">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PX4GG7CS');
            `}
          </Script>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={addStructuredData()}
            key="product-jsonld"
          />

          {/* PWA primary color */}
          <meta
            key="theme-color"
            name="theme-color"
            content={theme.palette.primary.main}
          />
          <link
            key="apple-touch-icon"
            rel="apple-touch-icon"
            sizes="180x180"
            href="favicon/apple-touch-icon.png"
          />
          <link
            key="favicon-32x32"
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="favicon/favicon-32x32.png"
          />
          <link
            key="favicon-16x16"
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="favicon/favicon-16x16.png"
          />
          <link key="manifest" rel="manifest" href="favicon/site.webmanifest" />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {(this.props as any).emotionStyleTags}
        </Head>
        <body>
          <GoogleTagManager gtmId="GTM-PX4GG7CS" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (context) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = context.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  context.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      enhanceApp: (App: any) =>
        function EnhanceApp(properties) {
          return <App emotionCache={cache} {...properties} />;
        },
    });

  const initialProperties = await Document.getInitialProps(context);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProperties.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProperties,
    emotionStyleTags,
  };
};
