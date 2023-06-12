import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { FC, ReactNode } from "react";
import { NextPageWithLayout } from "./page";

export const metadata = {
  title: "Star wars grid",
  description: "Whatever",
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const AppProviders: FC<{ children: ReactNode }> = (props) => {
  return <div>{props.children}</div>;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <AppProviders>{getLayout(<Component {...pageProps} />)}</AppProviders>;
}
