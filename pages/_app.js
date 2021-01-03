import React from "react";
import ReactGA from "react-ga";

import "../styles/index.css";

export default function MyApp({ Component, pageProps }) {
  let production = true;
  if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") production = false;

  if (typeof window !== "undefined" && production) {
    ReactGA.initialize("UA-96829474-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  return <Component {...pageProps} />;
}
