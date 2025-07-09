import { Link } from 'react-router-dom';
import styles from './LogoDiv.module.css';

export default function LogoDiv() {
  return <div className={styles.parent}>
    <Link to='/' className={styles.logoText}><span className={styles.logoHighlightedText}>Unique</span> Hosting</Link>
  </div>;
}