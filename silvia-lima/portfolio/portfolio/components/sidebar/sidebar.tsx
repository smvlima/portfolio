import Link from "next/link";
import { NextPage } from "next";
import styles from "../sidebar/sidebar.module.scss";
import { AiFillGitlab , AiFillLinkedin } from 'react-icons/ai';

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
          <Link href="/">
            <a>About Me</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>My Skills</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>Portfolio</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>Blog</a>
          </Link>
        </li>
        <li className={styles.item}>
          <Link href="/">
            <a>Contact Me</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.social}>
        <li>
        <Link href="https://gitlab.com/smvlima">
            <a target="_blank"><AiFillGitlab/></a>
          </Link>
        </li>
        <li>
        <Link href="https://www.linkedin.com/in/smvlima/">
            <a><AiFillLinkedin/></a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
