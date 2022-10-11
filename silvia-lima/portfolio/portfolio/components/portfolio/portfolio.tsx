import { NextPage } from "next";
import Link from "next/link";
import { isMapIterator } from "util/types";
import { PORTFOLIO } from "../../mocks/portfolio";
import styles from "../portfolio/portfolio.module.scss";

interface Props {}

const Portfolio: NextPage<Props> = ({}) => {
  return (
    <div className={styles.portfolio} id="portfolio">
      <h2 className={styles.title}>Portfolio</h2>
      <div className={styles.grid}>
        {PORTFOLIO.map((item) => (
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
                <div className={styles.languages__box}>
                  {item.languages.map((lang) => (
                    <span className={styles.languages}>{lang}</span>
                  ))}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
