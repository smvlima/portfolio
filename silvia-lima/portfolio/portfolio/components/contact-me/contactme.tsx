import { NextPage } from "next";
import styles from "../contact-me/contactme.module.scss";

interface Props {}

const Contactme: NextPage<Props> = ({}) => {
  return (
    <div className={styles.contactme} id="contactme">
      <h2 className={styles.title}>Contact me!</h2>
      <div className={styles.content}>
        <form action="#" method="get" className={styles.form}>
          <input 
            className={styles.form__name}
            type="text" 
            placeholder="Name" 
            id="name" 
            name="name"
            ></input>
          <input
          className={styles.form__surname}
            type="text"
            placeholder="Surname"
            id="surname"
            name="surname"
          ></input>
          <input
          className={styles.form__email}
            type="text"
            placeholder="Email"
            id="email"
            name="email"
          ></input>
          <input
          className={styles.form__subject}
            type="text"
            placeholder="Subject"
            id="subject"
            name="subject"
          ></input>
          <textarea
          className={styles.form__message}
            placeholder="Message"
            id="message"
            name="message"
          ></textarea>
          <button type="submit" className={styles.form__button}>Send!</button>
        </form>
        <div className={styles.text}>
          <p className={styles.paragraph}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, at
            architecto natus aspernatur libero nisi minus quis? Fugit laborum
            voluptatibus quam ad eveniet. Tempora voluptatibus quo soluta!
            Natus, non optio. Obcaecati ducimus assumenda earum dolor recusandae
            nulla nisi. Labore dicta culpa iste inventore asperiores beatae
            obcaecati atque officia animi? Harum itaque dolores magnam, minima
            nihil nostrum in molestiae maxime illum? Consequatur nam earum neque
            debitis sunt dolore quibusdam, reiciendis quod facere, eum quas
            cumque quam temporibus repudiandae magnam iste laboriosam totam
            tempora, laborum voluptatibus sed ullam. At laborum ipsam id. Porro,
            quidem sequi! Delectus facere necessitatibus at. Sapiente,
            doloribus. Quisquam repellendus dignissimos dicta laborum aliquam
            consectetur doloremque dolorum dolorem magni nemo, harum
            consequuntur commodi architecto aperiam quo ipsa repellat unde.
            Assumenda quaerat, blanditiis dolor cum officia corrupti praesentium
            placeat, reprehenderit dolore quas tempore ab unde necessitatibus
            eaque eligendi hic modi numquam ea facere? Aut, ipsa esse. Quibusdam
            vel labore consequatur. Reiciendis architecto repudiandae aspernatur
            culpa accusamus ipsam delectus? A mollitia doloremque eum ex enim
            quam sunt similique magni fuga, magnam, animi velit! Necessitatibus
            sequi expedita rem vitae? Consequatur, at laborum. Officia similique
            quam non corporis accusamus maiores? Consequuntur animi deserunt
            pariatur sequi nulla consequatur debitis, odit excepturi, architecto
            perspiciatis a quo quisquam id vero sed impedit tempora maxime
            tempore necessitatibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
