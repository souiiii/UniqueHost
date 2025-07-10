import Build from '../components/Build';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import styles from './WebsiteBuilder.module.css';

export default function WebsiteBuilder() {
  return <div className={styles.parent}>
    <NavBar/>
    <Build/>
    <Footer/>
  </div>;
}