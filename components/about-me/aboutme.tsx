import styles from "../about-me/aboutme.module.scss";

const Aboutme = () => {
  return (
    <div className={styles.aboutme} id="aboutme">
      <h2 className={styles.title}>About me </h2>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            Hi, my name is Sílvia and I&#39;m currently studying to become a
            Full-Stack Web Developer.
          </p>
          <p>
            I am 27 years old and I am from the small village of Alpendorada in
            the Oporto district. In the beginning of my adult life I lived for 5
            years in the City of Oporto, and then at the age of 22 I decided to
            move to Faro. Here I feel I can have the best of both worlds, the
            country and the city, plus the pleasure of living near the sea. But,
            as a lover of challenges, I am not afraid of seizing new
            opportunities that life offers me.{" "}
          </p>
          <p>
            I realized I was interested in multimedia when I started to study
            marketing, and felt my enthusiasm was not about marketing strategies but about producing content. So, I enrolled for a course of development of multimedia products in ISMAI. here, I&#39;ve studied several areas, as illustration, photography, 3D modeling, design, sound, video, gaming, data bases and programming. I was specially interested in the last one. Due to this experience, I've finally figured out programming was my passion and what I wished for my professional career.
          </p>
          <p>
            After some years invested in self-taught and my personal projects,
            I&#39;ve decided to start the course of Full-Stack Web Developer
            which I&#39;m currently studying at FLAG.{" "}
          </p>
        </div>
        <div className={styles.image}></div>
      </div>
    </div>
  );
};

export default Aboutme;
