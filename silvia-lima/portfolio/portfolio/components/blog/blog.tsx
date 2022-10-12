import { NextPage } from 'next';
import Link from 'next/link';
import { BLOG } from '../../mocks/blog';
import styles from '../blog/blog.module.scss';

interface Props {}

const Blog: NextPage<Props> = ({}) => {
  return (
    <div className={styles.blog} id="blog">
      <h2 className={styles.title}>Blog</h2>
      <div className={styles.grid}>
        {BLOG.map((item) => (
          <div
            className={styles.box}
            style={{ backgroundImage: `url(${item.image})` }}
            key={item.id}
          >
            <Link href={item.link}>
              <a
                target="_blank"
                className={styles.box__link}
              >
                <span className={styles.box__title}>{item.title}</span>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
    );
  };

export default Blog;