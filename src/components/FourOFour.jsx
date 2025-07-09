import styles from './FourOFour.module.css';
import NavBar from './NavBar';

export default function FourOFour() {
  return <div className={styles.parent}>
    <NavBar/>
    <div className={styles.container}>
        <h1 className={styles.message}>404 Page Not Found</h1>
    </div>
  </div>;
}