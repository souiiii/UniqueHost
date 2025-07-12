import styles from "./DeveloperSection.module.css";
import Star from "./Star";

export default function DeveloperSection({devRef1, devRef2
}) {
  return (
    <div className={styles.parent}>
      <div ref={devRef1} className={styles.container}>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src="https://ik.imagekit.io/kyayaarshahid/wow.webp"
          />
        </div>
        <div className={styles.actionDiv}>
          <div className={styles.textDiv}>
            <span className={styles.heading}>
              Get a custom build website that caters to your needs!
            </span>
            <button className={`button ${styles.button}`}>See Details→</button>
          </div>
        </div>
      </div>
      <div ref={devRef2} className={styles.testimonialContainer}>
        <h1 className={styles.heading2}>
          What our <span className={styles.clients}>Clients</span> Say!
        </h1>
        <div className={styles.grid}>
          <div className={styles.testContainer}>
            <Star />
            <div>
              <h1 className={styles.name}>
                <div className={styles.commaDiv}>
                  <img
                    src="https://ik.imagekit.io/kyayaarshahid/comma.webp"
                    className={styles.comma}
                  />
                </div>
                Almighty Subham
              </h1>
              <p className={styles.desc}>
                “This is the cheapest and best hosting. The staff here talks
                very well and also helps. If you are thinking of making a
                personal SMP or your own public server, then unique hosting is
                the best option. ❤️”
              </p>
            </div>
          </div>
          <div className={`${styles.testContainer} ${styles.middleContainer}`}>
            <Star />
            <div>
              <h1 className={styles.name}>
                <div className={styles.commaDiv}>
                  <img
                    src="https://ik.imagekit.io/kyayaarshahid/comma.webp"
                    className={styles.comma}
                  />
                </div>
                Almighty Subham
              </h1>
              <p className={styles.desc}>
                “This is the cheapest and best hosting. The staff here talks
                very well and also helps. If you are thinking of making a
                personal SMP or your own public server, then unique hosting is
                the best option. ❤️”
              </p>
            </div>
          </div>
          <div className={styles.testContainer}>
            <Star />
            <div>
              <h1 className={styles.name}>
                <div className={styles.commaDiv}>
                  <img
                    src="https://ik.imagekit.io/kyayaarshahid/comma.webp"
                    className={styles.comma}
                  />
                </div>
                Almighty Subham
              </h1>
              <p className={styles.desc}>
                “This is the cheapest and best hosting. The staff here talks
                very well and also helps. If you are thinking of making a
                personal SMP or your own public server, then unique hosting is
                the best option. ❤️”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
