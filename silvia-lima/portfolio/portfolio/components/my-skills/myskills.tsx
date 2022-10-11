import { NextPage } from "next";
import Link from "next/link";
import Script from "next/script";
import styles from "../my-skills/myskills.module.scss";
import { PROGRAMS } from "../../mocks/programs";
import { WORKSHOPS } from "../../mocks/workshops";
import { inflateRawSync } from "zlib";

interface Props {}




const Myskills: NextPage<Props> = ({}) => {
  const programsColumns = PROGRAMS.length;
  const workshopsColumns = WORKSHOPS.length;

  return (
    <>
      <Script
        type="text/javascript"
        async
        src="//cdn.credly.com/assets/utilities/embed.js"
      ></Script>
      <div className={styles.myskills} id="myskills">
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.programs}>
          <h3 className={styles.subtitle}>Programs</h3>
          <div className={styles.programs__grid} style={{ gridTemplateColumns: `repeat(${programsColumns}, 1fr)` }} >
            {PROGRAMS.map((item) => (
              <div className={styles.box} key={item.id}>
                <Link href={item.link} className={styles.box}>
                  <a target="_blank" title={item.title} className={styles.box__link}>
                    <div className={styles.box__image}>
                      <img src={item.image} alt={item.name}></img>
                    </div>
                  </a>
                </Link>
              </div>    
            ))}
          </div>
        </div>
        <div className={styles.programs}>
          <h3 className={styles.subtitle}>Workshops</h3>
          <div className={styles.programs__grid} style={{ gridTemplateColumns: `repeat(${workshopsColumns}, 1fr)` }} >
            {WORKSHOPS.map((item) => (
              <div className={styles.box} key={item.id}>
                <Link href={item.link} className={styles.box}>
                  <a target="_blank" title={item.title} className={styles.box__link}>
                    <div className={styles.box__image}>
                      <img src={item.image} alt={item.name}></img>
                    </div>
                  </a>
                </Link>
              </div>    
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Myskills;
