import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <NavLink to="/" className={styles.links}>
          Home<div className={styles.underline}></div>
        </NavLink>
        <NavLink to="/hostings" className={styles.links}>
          Hosting Plans<div className={styles.underline}></div>
        </NavLink>
        <NavLink to="/website-builder" className={styles.links}>
          Website Builder<div className={styles.underline}></div>
        </NavLink>
        <NavLink to="/about-us" className={styles.links}>
          About Us<div className={styles.underline}></div>
        </NavLink>
      </div>
    </div>
  );
}