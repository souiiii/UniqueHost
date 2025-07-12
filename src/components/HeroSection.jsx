import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <h1 className={styles.heading}>
            <span className={styles.primaryHighlightedText}>Simple </span>&{" "}
            <span className={styles.primaryHighlightedText}>Robust </span>
            Hosting for your next{" "}
            <span className={styles.secondaryHighlightedText}>Venture</span>.
          </h1>
          <p className={styles.description}>
            Host and manage your free Minecraft server with ease on the most
            reliable and user-friendly platform. Trusted by a vibrant community
            of thousands.
          </p>
          <div className={styles.buttonDiv}>
            <button className={`button ${styles.getStartedButton}`}>
              Get Started →
              <div className={`button ${styles.shadow}`}>Get Started →</div>
            </button>
            <div className={styles.discordDiv}>
              <svg
                className={styles.discordSvg}
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
              <div>
                Join Our <span className={styles.discord}>Discord</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imgDiv}>

        <img className={styles.img} src="/kindd.webp"></img>
        </div>
      </div>
      <div className={styles.artifacts}>
        <svg
          width="479"
          height="604"
          viewBox="0 0 479 604"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="125" height="288" fill="#9935D3" fill-opacity="0.06" />
          <rect
            x="75"
            y="100"
            width="125"
            height="288"
            fill="#9935D3"
            fill-opacity="0.08"
          />
          <rect
            x="180"
            y="316"
            width="299"
            height="288"
            fill="#9935D3"
            fill-opacity="0.03"
          />
        </svg>
      </div>
    </div>
  );
}
