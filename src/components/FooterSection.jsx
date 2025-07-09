import styles from "./FooterSection.module.css";

export default function FooterSection() {
  return (
    <div className={styles.parent}>
      <div className={styles.topFooterContainer}>
        <div className={styles.footerImgDiv}>
          <img src="/footer.png" className={styles.footerImg} />
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
      <div className={styles.bottomFooterContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.linkDiv}>
            <div className={styles.Div}>
              <div className={styles.iconDiv}>
                <svg
                  className={styles.iconSvg}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7289da"
                  aria-label="Discord"
                  viewBox="0 0 512 512"
                  id="discord"
                >
                  <rect width="512" height="512" rx="15%"></rect>
                  <path
                    fill="#fff"
                    d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
                  ></path>
                  <ellipse cx="196" cy="279" rx="33" ry="35"></ellipse>
                  <ellipse cx="312" cy="279" rx="33" ry="35"></ellipse>
                </svg>
                <div className={styles.discord}>Instagram</div>
              </div>
              <div className={styles.iconDiv}>
                <svg
                  className={styles.iconSvg}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7289da"
                  aria-label="Discord"
                  viewBox="0 0 512 512"
                  id="discord"
                >
                  <rect width="512" height="512" rx="15%"></rect>
                  <path
                    fill="#fff"
                    d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
                  ></path>
                  <ellipse cx="196" cy="279" rx="33" ry="35"></ellipse>
                  <ellipse cx="312" cy="279" rx="33" ry="35"></ellipse>
                </svg>
                <div className={styles.discord}>Discord</div>
              </div>
            </div>
            <div className={styles.buttonDiv}>
                <div className={styles.buttonBgDiv}>

                <img src="/buttonbg.png" className={styles.buttonBg}/>
                </div>
              <button className={`button ${styles.button}`}>Order Now →</button>
            </div>
            <div className={styles.Div}>
              <div className={styles.iconDiv}>
                <svg
                  className={styles.iconSvg}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7289da"
                  aria-label="Discord"
                  viewBox="0 0 512 512"
                  id="discord"
                >
                  <rect width="512" height="512" rx="15%"></rect>
                  <path
                    fill="#fff"
                    d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
                  ></path>
                  <ellipse cx="196" cy="279" rx="33" ry="35"></ellipse>
                  <ellipse cx="312" cy="279" rx="33" ry="35"></ellipse>
                </svg>
                <div className={styles.discord}>Twitter</div>
              </div>
              <div className={styles.iconDiv}>
                <svg
                  className={styles.iconSvg}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#7289da"
                  aria-label="Discord"
                  viewBox="0 0 512 512"
                  id="discord"
                >
                  <rect width="512" height="512" rx="15%"></rect>
                  <path
                    fill="#fff"
                    d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
                  ></path>
                  <ellipse cx="196" cy="279" rx="33" ry="35"></ellipse>
                  <ellipse cx="312" cy="279" rx="33" ry="35"></ellipse>
                </svg>
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
