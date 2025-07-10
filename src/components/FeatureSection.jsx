import styles from "./FeatureSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRocket,
  faShieldHalved,
  faLaptopCode,
  faHeadset,
  faServer,
  faGem,
} from "@fortawesome/free-solid-svg-icons";

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
            <div className={`${styles.gridBox} ${styles.gridBox1}`}>
              <div className={styles.featureSvgDiv}>
                <FontAwesomeIcon
                  icon={faRocket}
                  className={styles.fontAwesome}
                />
              </div>
              <p className={styles.feature}>
                <span className={styles.highlightedFeature}>
                  Super quick load times
                </span>{" "}
                with blazing fast servers.
              </p>
            </div>
            <div className={`${styles.gridBox} ${styles.gridBox2}`}>
              <div className={styles.featureSvgDiv}>
                <FontAwesomeIcon
                  icon={faShieldHalved}
                  className={styles.fontAwesome}
                />
              </div>
              <p className={styles.feature}>
                <span className={styles.highlightedFeature}>
                  DDOS Protection
                </span>
                , to keep your server always safe.
              </p>
            </div>
            <div className={`${styles.gridBox} ${styles.gridBox3}`}>
              <div className={styles.featureSvgDiv}>
                <FontAwesomeIcon
                  icon={faLaptopCode}
                  className={styles.fontAwesome}
                />
              </div>
              <p className={styles.feature}>
                <span className={styles.highlightedFeature}>
                  Get websites made
                </span>
                , which are clean and superfast.
              </p>
            </div>
            <div className={`${styles.gridBox} ${styles.gridBox4}`}>
              <div className={styles.featureSvgDiv}>
                <FontAwesomeIcon
                  icon={faHeadset}
                  className={styles.fontAwesome}
                />
              </div>
              <p className={styles.feature}>
                <span className={styles.highlightedFeature}>
                  24/7 Quick Support
                </span>{" "}
                and help from our support team.
              </p>
            </div>
            <div className={`${styles.gridBox} ${styles.gridBox5}`}>
              <div className={styles.featureSvgDiv}>
                <FontAwesomeIcon
                  icon={faServer}
                  className={styles.fontAwesome}
                />
              </div>
              <p className={styles.feature}>
                <span className={styles.highlightedFeature}>
                  Instant Host Setup
                </span>{" "}
                and configuration with ease.
              </p>
            </div>
            <div className={`${styles.gridBox} ${styles.gridBox6}`}>
              <div className={styles.featureSvgDiv}>
                <FontAwesomeIcon icon={faGem} className={styles.fontAwesome} />
              </div>
              <p className={styles.feature}>
                <span className={styles.highlightedFeature}>
                  Incredible Value
                </span>{" "}
                with servers picked just for your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
