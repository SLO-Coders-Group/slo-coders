import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key="title">SLO Coders</title>
        <meta key="description" name="description" content="SLO Coders" />
        <link
          key="canonical"
          rel="canonical"
          href="https://www.slocoders.com/"
        />
      </Head>
      <Typography variant="h1">SLO Coders</Typography>
    </>
  );
};

export default Home;
