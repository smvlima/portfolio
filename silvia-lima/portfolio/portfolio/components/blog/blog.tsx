import { NextPage } from 'next';
import styles from '../blog/blog.module.scss';

interface Props {}

const Blog: NextPage<Props> = ({}) => {
  return (
    <div id='blog'>
      <p className={styles.test}>this is blog component</p>
    </div>
    );
  };

export default Blog;