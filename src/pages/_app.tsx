import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../styles/theme";
import createEmotionCache from "../components/create-emotion-cache";
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
        <title key="title">SLO County Coders | A group of coders in San Luis Obispo</title>
        <meta key="og-site-name" property="og:site_name" content="SLO County Coders" />
        <meta
        key="og-title"
          property="og:title"
          content="A group of coders in San Luis Obispo"
        />

        <meta
        key="og-image"
          property="og:image"
          content="https://www.slocountycoders.com/favicon/android-chrome-512x512.png"
        />

        <meta
          key="description"
          name="description"
          content="A community of coders, developers, and programmers gathering for friendship, support, fun, and inspiration."
        />
        <meta
        key="og-description"
          property="og:description"
          content="A community of coders, developers, and programmers gathering for friendship, support, fun, and inspiration."
        />

        <meta
          key="viewport"
          name="viewport"
          content="initial-scale=1, width=device-width"
        />

        <meta key="og-locale" property="og:locale" content="en_US" />
      </Head>

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

Settings.defaultZone = "America/Los_Angeles";
