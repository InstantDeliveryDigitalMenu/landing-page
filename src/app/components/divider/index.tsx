import styles from "./divider.module.css";

const Divider = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.divider} />
    </div>
  );
};

export default Divider;
