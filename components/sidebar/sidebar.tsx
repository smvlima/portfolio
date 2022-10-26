import Link from "next/link";
import styles from "../sidebar/sidebar.module.scss";
import { AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import Theme_button from "../theme-button/theme-button";
import { useRecoilState } from "recoil";
import { menuEnabledAtom } from "../../atoms/menu/atoms";

const Sidebar = () => {
  const [info, setInfo] = useRecoilState(menuEnabledAtom);
  
  return (
    <>
      <div className={styles.sidebar} style={{}}>
          <Link
            href="/#top">
            <div className={styles.img}>
              <a onClick={()=> setInfo(true)} className={styles.logo}></a>
            </div>
          </Link>
        <ul className={styles.navigation}>
          <li className={styles.item}>
          <Link href="/#aboutme">
            <a onClick={()=> setInfo(true)}>About Me</a>
            </Link>
          </li>

          <li className={styles.item}>
          <Link href="/#myskills">
            <a onClick={()=> setInfo(true)}>My Skills</a>
            </Link>
          </li>
          <li className={styles.item}>
          <Link href="/#portfolio">
            <a onClick={()=> setInfo(true)}>Portfolio</a>
            </Link>
          </li>
          <li className={styles.item}>
          <Link href="/#blog">
            <a onClick={()=> setInfo(true)}>Blog</a>
            </Link>
          </li>
          <li className={styles.item}>
          <Link href="/#contactme">
            <a onClick={()=> setInfo(true)}>Contact Me</a>
            </Link>
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
    </>
  );
};

export default Sidebar;
