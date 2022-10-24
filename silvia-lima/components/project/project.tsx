import styles from "../project/project.module.scss";
import { FiX } from "react-icons/fi";
import { AiFillGithub, AiFillPlayCircle } from "react-icons/ai";
import Link from "next/link";
import { PORTFOLIO } from "../../mocks/portfolio";
import { useEffect } from "react";

interface Props {
  project: number;
  resetProject(zero: number): void;
}

const Project = ({ project , resetProject }: Props) => {
  function sendId(zero: number) {
    resetProject(zero);
  }

  const selectedProject = PORTFOLIO.find((element) => element.id === project);

  useEffect(()=>{
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  },[selectedProject])

  if (selectedProject) {

    return (
      <div className={styles.project}>
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
                      <AiFillGithub />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={selectedProject?.link.online}>
                    <a target="_blank">
                      <AiFillPlayCircle />
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

export default Project;
