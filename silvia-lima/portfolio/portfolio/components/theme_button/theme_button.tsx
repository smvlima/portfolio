import { NextPage } from 'next'
import styles from "../theme_button/theme_button.module.scss";

interface Props {}

const Theme_button: NextPage<Props> = ({}) => {


  
  return (
    <>
      <form action="#">
        <label className={styles.switch}>
          <input type="checkbox" />
          <span className={styles.slider}></span>
        </label>
      </form>
    </>
  );
};

export default Theme_button