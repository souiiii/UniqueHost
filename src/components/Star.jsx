import styles from './Star.module.css';

export default function Star() {
  return (
    <div className={styles.parent}>
      <img
        className={styles.img}
        src="https://ik.imagekit.io/kyayaarshahid/star.webp"
      />
    </div>
  );
}