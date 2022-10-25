import { BLOG } from "../../mocks/blog";
import styles from "../blog/blog.module.scss";

interface Props {
  selectPost(id: number): void;
}

const Blog = ({ selectPost }: Props) => {
  function sendId(id: number) {
    selectPost(id);
  }
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
            <button
              className={styles.box__item}
              onClick={() => {
                sendId(item.id);
              }}
            >
              <span className={styles.box__title}>{item.title}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
