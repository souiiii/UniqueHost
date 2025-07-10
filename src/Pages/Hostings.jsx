import Footer from '../components/Footer';
import MarketContent from '../components/MarketContent';
import NavBar from '../components/NavBar';
import styles from './Hostings.module.css';

export default function Hostings() {
  return <div className={styles.parent}>
    <NavBar/>
    <MarketContent/>
    <Footer/>
  </div>;
}