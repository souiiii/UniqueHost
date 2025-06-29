import LogoDiv from './LogoDiv';
import styles from './NavBar.module.css';

export default function NavBar() {
  return <div className={styles.parent}>
    <LogoDiv/>
    <div className={styles.rightNavDiv}>
        <ul className={styles.navLinkDiv}>
            <li className={styles.navLinkContainer}><div className={styles.underline}></div><a href="" className={styles.navLinks}>Home</a></li>
            <li className={styles.navLinkContainer}><div className={styles.underline}></div><a href="" className={styles.navLinks}>Minecraft Hosting</a></li>
            <li className={styles.navLinkContainer}><div className={styles.underline}></div><a href="" className={styles.navLinks}>Other Hostings</a></li>
            <li className={styles.navLinkContainer}><div className={styles.underline}></div><a href="" className={styles.navLinks}>Know More</a></li>
        </ul>
        <button className="button">Buy Now</button>
    </div>
  </div>;
}