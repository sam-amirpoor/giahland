import styles from "./Alert.module.css";

function Alert({ message, onClick }) {
  function handleClick() {
    onClick();
  }

  return (
    <div className={`${styles.alert} ${message ? styles.active : ""}`}>
      <p>{message}</p>
      <button onClick={handleClick}>باشه</button>
    </div>
  );
}

export default Alert;
