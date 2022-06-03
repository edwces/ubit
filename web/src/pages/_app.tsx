import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { theme } from "../mantine";
import { AppMetadata } from "../modules/meta";

function MyApp({ Component, pageProps }: AppProps) {
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
