import styles from "../front-page/frontpage.module.scss";
import { AiOutlineArrowDown, AiOutlineMenu  } from "react-icons/ai";

const Frontpage = () => {

  return (
    <>
      <div className={styles.frontpage}>
        <h2 className={styles.subtitle}>Hello World,</h2>
        <h1 className={styles.title}>I'm Sílvia Lima</h1>
        <p className={styles.description}>Full-Stack Web Developer</p>
        <div className={styles.call_to_action}>
          <a href="#contactme">Contact Me!</a>
        </div>
        <div className={styles.scroll}>
          <span className={styles.scroll__text}>scroll down</span>
          <span className={styles.scroll__arrow}>
            <AiOutlineArrowDown />
          </span>
        </div>
      </div>
      {/* <button
        className={styles.cta}
        onClick={() => {
          showMenu(true);
          console.log(visibility);
        }}
      >
        <AiOutlineMenu />
      </button>
      <button
        className={styles.close}
        onClick={() => {
          hideMenu(false);
          console.log(visibility);
        }}
      >
        <FiX />
      </button> */}
    </>
  );
};

export default Frontpage;
