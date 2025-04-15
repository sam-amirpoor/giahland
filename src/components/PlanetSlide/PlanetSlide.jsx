import styles from "./PlanetSlide.module.css";

function PlanetSlide({ planet }) {
  return (
    <div className={styles.slide}>
      <div className={styles.cover}>
        <img
          src={planet.cover}
          alt={planet.title}
        />
      </div>
      <div className={styles.des}>
        <h3>{planet.title}</h3>
        <div>
          <span>قیمت:</span>
          <p>{planet.price} تومان</p>
        </div>
        <a href="#">مشاهده بیشتر</a>
      </div>
    </div>
  );
}

export default PlanetSlide;
