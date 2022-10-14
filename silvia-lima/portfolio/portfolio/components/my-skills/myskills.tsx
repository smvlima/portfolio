import { NextPage } from "next";
import Link from "next/link";
import Script from "next/script";
import styles from "../my-skills/myskills.module.scss";
import { PROGRAMS } from "../../mocks/programs";
import { WORKSHOPS } from "../../mocks/workshops";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { imageOptimizer } from "next/dist/server/image-optimizer";

interface Props {}
const Myskills: NextPage<Props> = ({}) => {
  return (
    <>
      <div className={styles.myskills} id="myskills">
        <h2 className={styles.title}>My Skills</h2>
        <div className={styles.programs}>
          <h3 className={styles.subtitle}>Programs</h3>
            {PROGRAMS && (
              <Swiper
                
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                //   scrollbar={{ draggable: true }}
                navigation={true}
                autoplay={{ delay: 6000 }}
                modules={[Pagination, Navigation, Autoplay]}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
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
                              <img src={item.image} alt={item.name}></img>
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
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
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
                              <img src={item.image} alt={item.name}></img>
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
