import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

/**
 * Adds two numbers together.
 * @param {int} Component
 * @param {int} pageProps
 * @return {React.Component}
 */
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
