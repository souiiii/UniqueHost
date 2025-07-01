import styles from "./FeatureSection.module.css";

export default function FeatureSection() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.container1}>
          <div className={styles.imgDiv}>
            <img className={styles.img} src="/minefeature.png" />
          </div>
          <div className={styles.textDiv}>
            <h1 className={styles.text}>
              Experience the{" "}
              <span className={styles.gradientText1}>power of speed </span>
              {/* <span className={styles.gradientText2}>speed</span>  */}
              with our cutting-edge{" "}
              <span className={styles.gradientText3}>
                hosting infrastructure
              </span>
              .
            </h1>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.headingDiv}>
            <h1 className={styles.mainHeading}>
              <span className={styles.featureText}>Features</span> that set us
              apart.
            </h1>
            <p className={styles.subHeading}>
              These are some instant benefits of using Unique Hosting for your
              servers
            </p>
          </div>
          <div className={styles.grid}>
            <div className={`${styles.gridBox} ${styles.gridBox1}`}></div>
            <div className={`${styles.gridBox} ${styles.gridBox2}`}></div>
            <div className={`${styles.gridBox} ${styles.gridBox3}`}></div>
            <div className={`${styles.gridBox} ${styles.gridBox4}`}></div>
            <div className={`${styles.gridBox} ${styles.gridBox5}`}></div>
            <div className={`${styles.gridBox} ${styles.gridBox6}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
