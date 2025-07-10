import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <a
          className={styles.links}
          href="https://instagram.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="social-icon instagram"
          />{" "}
          <span className={styles.linkText}>Instagram</span>
        </a>
        <a
          className={styles.links}
          href="https://discord.com/your-server"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faDiscord} className="social-icon discord" />
          <span className={styles.linkText}>Discord</span>
        </a>
        <a
          className={styles.links}
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="social-icon twitter" />
          <span className={styles.linkText}>Twitter</span>
        </a>
        <a
          className={styles.links}
          href="https://youtube.com/yourchannel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="social-icon youtube" />
          <span className={styles.linkText}>Youtube</span>
        </a>
      </div>
    </div>
  );
}
