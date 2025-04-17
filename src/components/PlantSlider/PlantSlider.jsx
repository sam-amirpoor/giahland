import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./PlantSlider.module.css";
import PlantSlide from "../PlantSlide/PlantSlide";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

function PlantSlider({ sliderData, title }) {
  const swiperRef = useRef(null);

  const handleSlideNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className={styles.slider}>
      <div>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        modules={[Navigation]}
        navigation={false}
        ref={swiperRef}
        breakpoints={{
          1200: {
            slidesPerView: 4,
          },
          900: {
            slidesPerView: 3,
          },
          600: {
            slidesPerView: 2,
          },
        }}
      >
        {sliderData.map((data) => (
          <SwiperSlide key={data.id}>
            <PlantSlide plant={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={styles.navigation}
        onClick={handleSlideNext}
      >
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.705 7.91L14.295 6.5L8.29498 12.5L14.295 18.5L15.705 17.09L11.125 12.5L15.705 7.91Z"
            fill="#417F56"
          />
        </svg>
      </button>
    </section>
  );
}

export default PlantSlider;
