import { Link, NavLink } from "react-router-dom";
import LogoDiv from "./LogoDiv";
import styles from "./NavBar.module.css";
import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";

export default function NavBar() {
  const navRef = useRef(null);
  const [navView, setNavView] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavView(false); // Close nav or whatever state change you want
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={navRef} className={styles.parent}>
      <div className={styles.container}>
        <LogoDiv />
        <div className={styles.rightNavDiv}>
          <ul className={styles.navLinkDiv}>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <NavLink to="/" href="" className={styles.navLinks}>
                Home
              </NavLink>
            </li>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <NavLink to="/hostings" href="" className={styles.navLinks}>
                Hosting Plans
              </NavLink>
            </li>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <NavLink
                to="/website-builder"
                href=""
                className={styles.navLinks}
              >
                Website Builder
              </NavLink>
            </li>
            <li className={styles.navLinkContainer}>
              <div className={styles.underline}></div>
              <NavLink to="/about-us" href="" className={styles.navLinks}>
                About Us
              </NavLink>
            </li>
          </ul>

          <Link to="/hostings" className={`button ${styles.button}`}>
            Buy Now
            <div className={styles.arrowDiv}>
              <svg
                className={styles.arrow}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
              </svg>
            </div>
          </Link>
          <div
            onClick={() => setNavView((view) => !view)}
            className={styles.svgDiv}
          >
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </div>
        </div>
      </div>
      {navView && <Menu />}
    </div>
  );
}
