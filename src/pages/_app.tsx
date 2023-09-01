import * as React from "react";
import Head from "next/head";
import Script from "next/script";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../components/create-emotion-cache";
import "@fontsource/oswald";
import "../styles/globals.css";
import { Settings } from "luxon";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProperties extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(properties: MyAppProperties) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = properties;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title key="title">SLO County Coders</title>

        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-8YH73YEWW4"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8YH73YEWW4');
        `}
      </Script>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

Settings.defaultZone = "America/Los_Angeles";
