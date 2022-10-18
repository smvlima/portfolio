import styles from "../details/details.module.scss";
import { FiX } from "react-icons/fi";
import { AiFillGitlab, AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";
import { PORTFOLIO } from "../../mocks/portfolio";

interface Props {
  project: number;
  resetProject(zero: number): void;
}

const Details = ({ project }: Props, { resetProject }: Props) => {
  function sendId(zero: number) {
    resetProject(zero);
  }

  const selectedProject = PORTFOLIO.find((element) => element.id === project);

  if (project !== 0) {
    return (
      <div className={styles.details}>
        <span
          className={styles.close}
          onClick={() => {
            sendId(0);
          }}
        >
          <FiX />
        </span>
        <div className={styles.container}>
          <h3 className={styles.title}>{selectedProject?.title}</h3>
          <div className={styles.description}>
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${selectedProject?.image})` }}
            ></div>
            <div className={styles.content}>
              <p className={styles.text}>{selectedProject?.description}</p>
              
              <div className={styles.box}>
                {selectedProject?.languages.map((l) => (
                  <span key={l?.id} className={styles.languages}>
                    {l?.desc}
                  </span>
                ))}
              </div>
              <ul className={styles.social}>
                <li>
                  <Link href={selectedProject?.link.code}>
                    <a target="_blank">
                      <AiFillGitlab />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={selectedProject?.link.online}>
                    <a target="_blank">
                      <AiFillLinkedin />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Details;
