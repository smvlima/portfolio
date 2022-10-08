import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Sidebar from "../components/sidebar/sidebar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Sidebar />
      <main>
      <Component {... pageProps} />
      </main>
      
    </>
  );
}

export default MyApp;
