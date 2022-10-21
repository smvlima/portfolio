import styles from "../menu/menu.module.scss";
import { FiX } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { useRecoilState} from "recoil";
import { menuEnabledAtom } from "../atoms";
import { useEffect } from "react";


interface Props {
  inShowMenu(boo:boolean):void;
}

const Menu = ({inShowMenu}:Props) => {
  const [visible, setVisible] = useRecoilState(menuEnabledAtom);

  function showMenu(state: boolean) {
    setVisible(state);
    inShowMenu(state);
  }
  function hideMenu(state: boolean) {
    setVisible(state);
    inShowMenu(state);
  }


  if (visible === true) {
    return (
      <>
        <button
          className={styles.cta}
          onClick={() => {
            showMenu(false);
            console.log(`${visible}m`);
          }}
        >
          <AiOutlineMenu />
        </button>
      </>
    );
  } else {

    return (
    <>
      <button
        className={styles.close}
        onClick={() => {
          hideMenu(true);
          console.log(`${visible}m`);
        }}
      >
        <FiX />
      </button>
      ;
    </>
  )}
};

export default Menu;
