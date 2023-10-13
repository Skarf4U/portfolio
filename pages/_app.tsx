import { useAnalytics } from "@/lib/useAnalytics";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import "../styles/projects.css";
import "../styles/about.css";
import "../styles/skills.css";
import "../styles/footer.css";

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <>
      <Head>
        <title>Adi Amar</title>
      </Head>
      <ThemeProvider enableColorScheme={false}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
