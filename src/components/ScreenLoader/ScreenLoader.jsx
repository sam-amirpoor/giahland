import styles from "./ScreenLoader.module.css";
import loader from "../../assets/loader/loader.gif";

function ScreenLoader() {
  return (
    <div className={styles.loader}>
      <img
        src={loader}
        alt="loader"
      />
      <p>لطفا صبر کنید ...</p>
    </div>
  );
}

export default ScreenLoader;
