import LogoDiv from './LogoDiv';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <LogoDiv />
        <div className={styles.rightNavDiv}>
          <ul className={styles.navLinkDiv}>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <a href="" className={styles.navLinks}>
                Home
              </a>
            </li>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <a href="" className={styles.navLinks}>
                Minecraft Hosting
              </a>
            </li>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <a href="" className={styles.navLinks}>
                Other Hostings
              </a>
            </li>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <a href="" className={styles.navLinks}>
                Know More
              </a>
            </li>
          </ul>
          <button className={`button ${styles.button}`}>Buy Now
            <div className={styles.arrowDiv}>
            <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}