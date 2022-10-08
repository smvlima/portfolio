import { NextPage } from 'next';
import styles from '../my-skills/myskills.module.scss'

interface Props {}

const Myskills: NextPage<Props> = ({}) => {
  return(
    <div id='myskills'>
      <p className={styles.test}>this is my skills component</p>
    </div>
    );
  };

export default Myskills