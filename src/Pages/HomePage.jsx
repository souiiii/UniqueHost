import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import styles from './HomePage.module.css';

export default function HomePage() {
  return <div className={styles.parent}>
    <NavBar/>
    <img className={styles.img} src='/kind.png'></img>
    <HeroSection/>

  </div>;
}