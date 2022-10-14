import { NextPage } from 'next';
import styles from '../details/details.module.scss'

interface Props {}

const Details: NextPage<Props> = ({}) => {
  return (
  <div className={styles.details}>
    <p> this is details</p>
  </div>
  )
}

export default Details