import Head from "next/head";
import { FC } from "react";

const CustomHead: FC = () => {
  return (
    <Head>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <title>Star wars grid</title>
      <meta name="description" content="Whatever" />
      <link rel="icon" type="image/ico" sizes="32x32" href="/favicon.ico" />
    </Head>
  );
};

export default CustomHead;
