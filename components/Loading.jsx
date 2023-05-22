import styles from "../styles/loading.module.scss";
export default function Loading() {
  return (
    <div className={styles.loading_container}>
      <div className={styles.loading}>
        <div className={styles.loading_text}>Loading</div>
        <div className={styles.loading_animation}>
          <div className={styles.loading_animation_dot}></div>
          <div className={styles.loading_animation_dot}></div>
          <div className={styles.loading_animation_dot}></div>
        </div>
      </div>
    </div>
  );
}
