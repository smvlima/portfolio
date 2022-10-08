import { NextPage } from 'next';
import styles from '../contact-me/contactme.module.scss';

interface Props {}

const Contactme: NextPage<Props> = ({}) => {
  return (
  <div className={styles.contactme} id='contactme'>
    <p className={styles.test}>this is contact me component</p>
  </div>
  );
};

export default Contactme;