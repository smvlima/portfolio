import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot, useRecoilValue } from "recoil";

function MyApp(
  { Component, pageProps }: AppProps,
) {


  return (
     <RecoilRoot>
      {/* <div className={styles.container} data-amount={`${useRecoilValue(menuEnabledAtom)}`}>
        <nav className={styles.nav}>
          <button
            onClick={() => {
              console.log(useRecoilValue(menuEnabledAtom));
            }}
          >
            oi
          </button>
          <Sidebar />
        </nav>
        <main className={styles.main}> */}
          <Component {...pageProps} />
        {/* </main>
      </div> */}
      </RecoilRoot>
  );
}

export default MyApp;
