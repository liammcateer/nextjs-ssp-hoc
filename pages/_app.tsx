import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { setupAxiosDefaults } from "../util/setUpAxiosDefaults";

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  setupAxiosDefaults({ locale });

  return <Component {...pageProps} />;
}
