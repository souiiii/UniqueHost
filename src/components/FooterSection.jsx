import styles from "./FooterSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function FooterSection({footerRef1, footerRef2}) {
  return (
    <div className={styles.parent}>
      <div ref={footerRef1} className={styles.topFooterContainer}>
        <div className={styles.footerImgDiv}>
          <img
            src="https://ik.imagekit.io/kyayaarshahid/footer.webp"
            loading="lazy"
            alt="roblox characters assemble"
            className={styles.footerImg}
          />
        </div>
        <h1 className={styles.heading}>
          Create your very own{" "}
          <span className={styles.customServer}>Custom Server</span> today!
        </h1>
        <p className={styles.desc}>
          Creating a server with Unique Hosting is simple and fast. Choose your
          preferred plan, pick your server location, and launch with a single
          click. Enjoy reliable performance, full control, and 24/7 support. Get
          online in minutes with Unique Hosting!
        </p>
      </div>
      <div ref={footerRef2} className={styles.bottomFooterContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.linkDiv}>
            <div className={styles.Div}>
              <div className={styles.iconDiv}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  fontSize="30px"
                  className="social-icon instagram"
                />

                <div className={styles.discord}>Instagram</div>
              </div>
              <div className={styles.iconDiv}>
                <FontAwesomeIcon
                  icon={faDiscord}
                  fontSize="30px"
                  className="social-icon discord"
                />
                <div className={styles.discord}>Discord</div>
              </div>
            </div>
            <div className={styles.buttonDiv}>
              <div className={styles.buttonBgDiv}>
                <img
                  src="https://ik.imagekit.io/kyayaarshahid/buttonbg.webp"
                  className={styles.buttonBg}
                />
              </div>
              <Link to="/hostings" className={`button ${styles.button}`}>
                Order Now →
              </Link>
            </div>
            <div className={styles.Div}>
              <div className={styles.iconDiv}>
                <FontAwesomeIcon
                  icon={faTwitter}
                  fontSize="30px"
                  className="social-icon twitter"
                />
                <div className={styles.discord}>Twitter</div>
              </div>
              <div className={styles.iconDiv}>
                <FontAwesomeIcon
                  icon={faYoutube}
                  fontSize="30px"
                  className="social-icon youtube"
                />
                <div className={styles.discord}>Youtube</div>
              </div>
            </div>
          </div>
          <div className={styles.footerNoteDiv}>
            <h1 className={styles.footerNote}>
              © 2025, UniqueHosting.com - All rights reserved. Not affiliated
              with Mojang, AB. Nor should we be considered a company endorsed by
              Mojang, AB. Email:{" "}
              <span className={styles.email}>support@uniquehosting.com</span> -
              Phone: +91 970 102 0707
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
