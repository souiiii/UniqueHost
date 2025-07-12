import DeveloperSection from '../components/DeveloperSection';
import FeatureSection from '../components/FeatureSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import styles from './HomePage.module.css';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
export default function HomePage() {
  const heroRef = useRef(null);
  const featureRef = useRef(null);
  const devRef1 = useRef(null);
  const devRef2 = useRef(null);
  const footerRef1 = useRef(null);
  const footerRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [heroRef.current, featureRef.current, devRef1.current, devRef2.current, footerRef1.current, footerRef2.current],
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power1.inOut" }
    );
  }, []);

  return <div className={styles.parent}>
    <NavBar/>
    <HeroSection heroRef={heroRef}/>
    <FeatureSection featureRef={featureRef}/>
    <DeveloperSection devRef1={devRef1} devRef2={devRef2}/>
    <FooterSection footerRef1={footerRef1} footerRef2={footerRef2}/>
  </div>;
}