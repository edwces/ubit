import "../styles/globals.css";
import "../styles/nprogress.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { theme } from "../mantine";
import { AppMetadata } from "../modules/meta";
import { useTopProgressBar } from "../modules/util";

function MyApp({ Component, pageProps }: AppProps) {
  useTopProgressBar();

  return (
    <>
      <AppMetadata />
      <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
