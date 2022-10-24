import styles from "../front-page/frontpage.module.scss";
import { AiOutlineArrowDown } from "react-icons/ai";
import Link from "next/link";

const Frontpage = () => {

  return (
    <>
      <div className={styles.frontpage}>
        <h2 className={styles.subtitle}>Hello World,</h2>
        <h1 className={styles.title}>I&#39;m Sílvia Lima</h1>
        <p className={styles.description}>Full-Stack Web Developer</p>
        <div className={styles.call_to_action}>
          <Link href="#contactme">
          <a>Contact Me!</a></Link>
          
        </div>
        <div className={styles.scroll}>
          <span className={styles.scroll__text}>scroll down</span>
          <span className={styles.scroll__arrow}>
            <AiOutlineArrowDown />
          </span> 
        </div>
      </div>
    </>
  );
};

export default Frontpage;
