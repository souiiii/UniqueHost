import AboutContainer from '../components/AboutContainer';
import NavBar from '../components/NavBar';
import styles from './About.module.css';

export default function About() {
  return (
    <div className={styles.parent}>
      <NavBar />
      <AboutContainer/>
    </div>
  );
}