import styles from "./PlantSlide.module.css";

function PlantSlide({ plant }) {
  return (
    <div className={styles.slide}>
      <div className={styles.cover}>
        <img
          src={plant.cover}
          alt={plant.title}
        />
      </div>
      <div className={styles.des}>
        <h3>{plant.title}</h3>
        <div>
          <span>قیمت:</span>
          <p>{plant.price} تومان</p>
        </div>
        <a href="#">مشاهده بیشتر</a>
      </div>
    </div>
  );
}

export default PlantSlide;
