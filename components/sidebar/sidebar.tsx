import Link from "next/link";
import styles from "../sidebar/sidebar.module.scss";
import { AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import Theme_button from "../theme-button/theme-button";
import { useRecoilState } from "recoil";
import { menuEnabledAtom } from "../../atoms/menu/atoms";

const Sidebar = () => {
  const [info, setInfo] = useRecoilState(menuEnabledAtom);
  function sentInfo() {
    setInfo(!info);
  }
  
  return (
    <>
      <div className={styles.sidebar} style={{}}>
          <Link
            href="/#top">
            <div className={styles.img}>
              <a onClick={()=> sentInfo()} className={styles.logo}></a>
            </div>
          </Link>
        <ul className={styles.navigation}>
          <li className={styles.item}>
          <Link href="/#aboutme">
            <a onClick={()=> sentInfo()}>About Me</a>
            </Link>
          </li>

          <li className={styles.item}>
          <Link href="/#myskills">
            <a onClick={()=> sentInfo()}>My Skills</a>
            </Link>
          </li>
          <li className={styles.item}>
          <Link href="/#portfolio">
            <a onClick={()=> sentInfo()}>Portfolio</a>
            </Link>
          </li>
          <li className={styles.item}>
          <Link href="/#blog">
            <a onClick={()=> sentInfo()}>Blog</a>
            </Link>
          </li>
          <li className={styles.item}>
          <Link href="/#contactme">
            <a onClick={()=> sentInfo()}>Contact Me</a>
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
