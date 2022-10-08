import { NextPage } from 'next';
import styles from '../portfolio/portfolio.module.scss'

interface Props {}

const Portfolio: NextPage<Props> = ({}) => {
  return (
    <div id='portfolio'>
      <p className={styles.test}>this is portfolio component</p>
    </div>
    );
  };


export default Portfolio;