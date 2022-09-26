import "../styles/globals.scss";
import "../styles/variables.scss"
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/sidebar";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
