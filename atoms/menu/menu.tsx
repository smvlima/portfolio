import styles from "../menu/menu.module.scss";
import { FiX } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { menuEnabledAtom } from "./atoms";

const Menu = () => {
  const [visible, setVisible] = useRecoilState(menuEnabledAtom);

  function showOrHideMenu() {
    setVisible(!visible);
  }

  if (visible === true) {
    return (
      <>
        <button type="submit"
          className={styles.cta}
          onClick={() => {
            showOrHideMenu();
            console.log(`${visible}menu`);
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
      type="submit"
        className={styles.close}
        onClick={() => {
          showOrHideMenu();
          console.log(`${visible}menu`);
        }}
      >
        <FiX />
      </button>
    </>
  )}
};

export default Menu;
