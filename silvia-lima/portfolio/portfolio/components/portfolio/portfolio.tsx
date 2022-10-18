import { PORTFOLIO } from "../../mocks/portfolio";
import styles from "../portfolio/portfolio.module.scss";

interface Props {
  selectProject(id:number):void;
  zeroProject:number;
}


const Portfolio = ({selectProject}:Props, {zeroProject}:Props) => {

  function sendId(id:number) {
    selectProject(id);
}

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
            <button className={styles.box__item} onClick={()=> {sendId(item.id)}}>
                <span className={styles.box__title}>{item.title}</span>
                <div className={styles.languages__box}>
                  {item.languages.map((l) => (
                    <span key={`${item.id}.${l?.id}`} className={styles.languages}>{l?.desc}</span>
                  ))}
                </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
