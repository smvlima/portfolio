import { NextPage } from "next";
import Head from "next/head";
import styles from "../my-skills/myskills.module.scss";

interface Props {}

const Myskills: NextPage<Props> = ({}) => {
  return (
    <>
      <Head>
        <>
          <script
            type="text/javascript"
            async
            src="//cdn.credly.com/assets/utilities/embed.js"
          ></script>
        </>
      </Head>
      <div className={styles.myskills} id="myskills">
        <h2 className={styles.title}>My Skills</h2>
        <div data-iframe-width="150" data-iframe-height="270" data-share-badge-id="60af28b1-2e35-4c8f-8b6c-180a12e9d590" data-share-badge-host="https://www.credly.com"></div>
      </div>
    </>
  );
};

export default Myskills;
