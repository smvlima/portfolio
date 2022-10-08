import { NextPage } from "next";
import styles from "../about-me/aboutme.module.scss";

interface Props {}

const Aboutme: NextPage<Props> = ({}) => {
  return (
    <div className={styles.aboutme} id="aboutme">
      <div className={styles.text}>
        <h2 className={styles.title}>About me </h2>
        <p>
          Hi, my name is Sílvia and I'm currently studying to become a
          Full-Stack Web Developer.
        </p>
        <p>
          I'm from the small village of Alpendorada in the Oporto district. In
          the beginning of my adult life I lived for 5 years in the City of
          Oporto, and then at the age of 22 I decided to move to Faro. Here I
          feel I can have the best of both worlds, the country and the city,
          plus the pleasure of living near the sea.{" "}
        </p>
        <p>
          I realized I was interested in multimedia when I started to study
          marketing, but I understood my enthusiasm was not about marketing
          strategies but about producing content. Then I enrolled for a course
          in multimedia products development in ISMAI. I've studied several
          areas on that course, as illustration, photography, 3D modeling,
          design, sound, video, gaming, data bases and programming. I was
          specially interested in programming. Due to this experience, I've
          finally figured out that was my motivation and my goal in this big
          world of multimedia.
        </p>
        <p>
          After some years invested in self-taught and my personal projects,
          I've decided to start the course of Full-Stack Web Developer which I'm
          currently studying at FLAG.{" "}
        </p>
      </div>
      <div className={styles.image}></div>
    </div>
  );
};

export default Aboutme;
