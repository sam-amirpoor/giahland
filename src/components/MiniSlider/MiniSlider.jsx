import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./MiniSlider.module.css";

function MiniSlider({ planets }) {
  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={4}
      className={styles.miniSlider}
    >
      {planets.map((data) => {
        return (
          <SwiperSlide className={styles.slide}>
            <img
              src={data.cover}
              alt={data.title}
            />
            <div>
              <h3>{data.title}</h3>
              <a href="#">
                خرید {data.title}{" "}
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.5 11H8.33L13.92 5.41L12.5 4L4.5 12L12.5 20L13.91 18.59L8.33 13H20.5V11Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default MiniSlider;
