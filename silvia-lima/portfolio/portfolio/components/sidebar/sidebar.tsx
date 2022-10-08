import Link from "next/link";
import { NextPage } from "next";
import styles from "../sidebar/sidebar.module.scss";
import { AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import Theme_button from '../theme-button/theme-button';
interface Props {}

const Sidebar: NextPage<Props> = ({}) => {


  return (
    <div className={styles.sidebar}>
      <Link href="/">
        <div>
          <a className={styles.logo}></a>
        </div>
      </Link>
      <ul className={styles.navigation}>
        <li className={styles.item}>
            <a href='/#aboutme'>About Me</a>
        </li>
        <li className={styles.item}>
            <a href="/#myskills">My Skills</a>
        </li>
        <li className={styles.item}>
            <a href="/#portfolio">Portfolio</a>
        </li>
        <li className={styles.item}>
            <a href="/#blog">Blog</a>
        </li>
        <li className={styles.item}>
            <a href="/#contactme">Contact Me</a>
        </li>
      </ul>
      <ul className={styles.social}>
        <li>
          <Link href="https://gitlab.com/smvlima">
            <a target="_blank">
              <AiFillGitlab />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/smvlima/">
            <a target="_blank">
              <AiFillLinkedin />
            </a>
          </Link>
        </li>
      </ul>
      <div className={styles.toggle}>
        <Theme_button />
      </div>
    </div>
  );
};

export default Sidebar;
