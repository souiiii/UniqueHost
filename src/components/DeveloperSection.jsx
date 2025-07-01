import styles from "./DeveloperSection.module.css";

export default function DeveloperSection() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <img className={styles.img} src="../../public/wow.png" />
        </div>
        <div className={styles.actionDiv}>
          <div className={styles.textDiv}>
            <span className={styles.heading}>Get a custom build website that caters to your needs!</span>
            <button className={`button ${styles.button}`}>See Details→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
