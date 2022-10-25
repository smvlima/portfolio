import Link from "next/link";
import styles from "../my-skills/myskills.module.scss";
import { PROGRAMS } from "../../mocks/programs";
import { WORKSHOPS } from "../../mocks/workshops";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import Image from "next/image";

const Myskills = () => {

  return (
    <>
      <div className={styles.myskills} id="myskills">
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.programs}>
          <h3 className={styles.subtitle}>Programs</h3>
          {PROGRAMS && (
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              autoplay={{ delay: 6000 }}
              modules={[Pagination, Navigation, Autoplay]}
              className={styles.swipe}
            >
              {PROGRAMS.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.box}>
                    <Link href={item.link} className={styles.box}>
                      <a
                        target="_blank"
                        title={item.title}
                        className={styles.box__link}
                      >
                        <div className={styles.box__image}>
                          <Image src={item.image} alt={item.name} width="100%" height="100%" layout="responsive" objectFit="contain"></Image>
                        </div>
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
        <div className={styles.programs}>
          <h3 className={styles.subtitle}>Workshops</h3>
          {WORKSHOPS && (
            <Swiper
              spaceBetween={10}
              slidesPerView="auto"
              loop={true}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                  loop: false,
                  navigation: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className={styles.swipe}
            >
              {WORKSHOPS.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className={styles.box}>
                    <Link href={item.link} className={styles.box}>
                      <a
                        target="_blank"
                        title={item.title}
                        className={styles.box__link}
                      >
                        <div className={styles.box__image}>
                          <Image src={item.image} width="100%" height="100%" layout="responsive" objectFit="contain"></Image>
                        </div>
                      </a>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </>
  );
};

export default Myskills;
