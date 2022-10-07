import { NextPage } from "next";
import styles from "../front_page/frontpage.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";

interface Props {}

const Frontpage: NextPage<Props> = ({}) => {
  return (
    <div className={styles.aboutme}>
      <h2 className={styles.subtitle}>Hello World,</h2>
      <h1 className={styles.title}>I'm Sílvia Lima</h1>
      <p className={styles.description}>Full-Stack Web Developer</p>
      <div className={styles.call_to_action}>     
      <Link href="/">
        <a>Contact Me!</a>
      </Link>
      </div>
      <div className={styles.scroll}>
        <span className={styles.scroll__text}>scroll down</span>
        <span className={styles.scroll__arrow}>
          <AiOutlineArrowDown />
        </span>
      </div>
    </div>
  );
};

export default Frontpage;
