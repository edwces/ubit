import "../styles/globals.css";
import "../styles/nprogress.css";
import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import { theme } from "../mantine";
import { useTopProgressBar } from "../modules/util";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../lib";
import { ReactQueryDevtools } from "react-query/devtools";
import { SessionProvider } from "../modules/auth/SessionProvider";
import { useAuthorizedHttp } from "../hooks/useAuthorizedHttp";

function MyApp({ Component, pageProps }: AppProps) {
  useTopProgressBar();
  useAuthorizedHttp();

  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withNormalizeCSS withGlobalStyles theme={theme}>
        <SessionProvider>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </SessionProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
