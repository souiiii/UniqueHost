import styles from "./AboutContainer.module.css";

export default function AboutContainer() {
  return (
    <div className={styles.parent}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.heading}>
          About <span className={styles.hosting}>Us</span>
        </h1>
        <p className={styles.desc}>
          <span className={styles.budget}>Unique</span> Hosting is crafted for
          creators who want full control without the hassle. We offer fast,
          pre-configured Minecraft servers with intuitive panel customization,
          built-in backups, instant plugin support, and real-time resource
          scaling — all backed by
          <span className={styles.hosting}> high-performance</span> hardware.
          Our focus is on reliability, speed, and giving you the freedom to run
          your server your way. No bloated features, no overpriced fluff — just
          solid hosting, tuned for what{" "}
          <span className={styles.hosting}>Minecraft</span> communities actually
          need. For advanced setups, branding, or one-on-one support, everything
          starts in our <span className={styles.budget}>Discord</span> — where
          real help happens fast.
        </p>

        <button className={`button ${styles.button}`}>
          <a className={styles.linkButton}>
            <span className={styles.discordDiv}>
              <svg
                className={styles.discordSvg}
                xmlns="http://www.w3.org/2000/svg"
                fill="#7289da"
                aria-label="Discord"
                viewBox="0 0 512 512"
                id="discord"
              >
                <rect width="0" height="0" rx="15%"></rect>
                <path
                  fill="#dddbe2"
                  d="m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z"
                ></path>
                <ellipse
                  className={styles.ellipse}
                  cx="196"
                  cy="279"
                  rx="33"
                  ry="35"
                ></ellipse>
                <ellipse
                  className={styles.ellipse}
                  cx="312"
                  cy="279"
                  rx="33"
                  ry="35"
                ></ellipse>
              </svg>
            </span>
            Discord→
          </a>
        </button>
        <div className={styles.aboutLoveDiv}>
          <img
            className={styles.aboutLove}
            src="https://ik.imagekit.io/kyayaarshahid/aboutlove.webp"
          />
        </div>
        <p className={styles.note}>
          Have questions or need support?{" "}
          <span className={styles.hosting}>Reach out</span>! Our support team is
          available 24/7.
        </p>
      </div>
    </div>
  );
}
