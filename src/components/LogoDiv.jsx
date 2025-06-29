import styles from './LogoDiv.module.css';

export default function LogoDiv() {
  return <div className={styles.parent}>
    <h1 className={styles.logoText}><span className={styles.logoHighlightedText}>Unique</span> Hosting</h1>
  </div>;
}