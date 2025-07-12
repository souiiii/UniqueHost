import styles from "./Build.module.css";

export default function Build() {
  return (
    <div className={styles.parent}>
      <div className={styles.container}>
        <div className={styles.headingDiv}>
          <div className={styles.imgDiv}>
            <img src="/left.webp" className={`${styles.img} ${styles.left}`} />
          </div>
          <h1 className={styles.heading}>
            <span className={styles.budget}>Let's </span>Build Your
            <span className={styles.hosting}> Website</span>
          </h1>
          <div className={styles.imgDiv}>
            <img src="/right.webp" className={`${styles.img} ${styles.right}`} />
          </div>
        </div>
        <p className={styles.desc}>
          Whether you need a simple "
          <span className={styles.budget}>Landing Page</span>" or a full-scale
          site, we’ll handle the design, development, and setup — tailored to
          your brand and ready to <span className={styles.hosting}>Launch</span>
          .
        </p>
        <div className={styles.personalDescDiv}>
          <p className={styles.personalDesc}>
            Your project will be led directly by{" "}
            <span className={styles.hosting}>Shahid</span>, ensuring fast,
            focused development with clear communication from start to finish.
            Whether it’s a clean landing page or a fully custom site, he’ll help
            you get online quicker — without the usual delays or confusion. Want
            to see his work?{" "}
            <a className={styles.profileLink}>Check out his portfolio</a> or
            connect with him on <a className={styles.socialLinks}>Instagram</a>,{" "}
            <a className={styles.socialLinks}>LinkedIn</a>, or{" "}
            <a className={styles.socialLinks}>Discord</a> to get started.
          </p>
          <button className={`button ${styles.button} ${styles.buttonPort}`}>
            <a
              target="_blank"
              href="https://www.meshahid.me/"
              className={styles.portfolioLink}
            >
              <div className={styles.profileDiv}>
                <img src="/profile.webp" className={styles.profile} />
              </div>
              <h1 className={styles.buttonText}>Portfolio→</h1>
            </a>
          </button>
        </div>
        <div className={styles.chillDiv}>
          <img className={styles.chillPng} src="/websiteChill.webp" />
        </div>
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
        <p className={styles.personalDesc2}>
          Or you can join <span className={styles.budget}>Unique</span>{" "}
          Hosting’s Discord server and continue from there.
        </p>
      </div>
    </div>
  );
}
