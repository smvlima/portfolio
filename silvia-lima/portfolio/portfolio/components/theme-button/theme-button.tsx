import { NextPage } from 'next'
import { useState } from 'react';
import styles from "../theme-button/theme-button.module.scss";
import LightTheme from './light-theme';

interface Props {}

const Theme_button: NextPage<Props> = ({}) => {
//info em localStorage
  function loadLightMode() {
    if (typeof localStorage === "undefined") {
      return false;
    }
    const value = localStorage.getItem("lightMode");
    return value === null ? false : JSON.parse(value);
  }
  
//definir inicialmente o modo light = false
  const [lightMode, setLightMode] = useState(loadLightMode);

  const changeTheme = () => {
    localStorage.setItem("lightMode", JSON.stringify(!lightMode));
    setLightMode(!lightMode);
  };





  
  return (
    <>
      <form action="#">
        <label className={styles.switch}>
          <input type="checkbox" id="theme-checkbox" onChange={changeTheme}/>
          <span className={styles.slider}></span>
        </label>
      </form>
      {lightMode && <LightTheme />}
    </>
  );
};

export default Theme_button