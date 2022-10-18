import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/sidebar";

import styles from "../styles/Home.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Sidebar />
      </nav>

      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
