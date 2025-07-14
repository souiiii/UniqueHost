import { useEffect, useRef } from "react";
import HostingPlans from "./HostingPlans";
import styles from "./MarketContent.module.css";
import gsap from "gsap";

export default function MarketContent() {
  const host = useRef(null)
  const add = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      [
        host.current,
          add.current,
      ],
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: "power1.inOut" }
    );
  }, []);
  return (
    <div className={styles.parent}>
      <div ref={host} className={styles.hostingsParentContainer}>
        <h1 className={styles.heading}>
          <span className={styles.hosting}>Hosting</span> MarketPlace
        </h1>
        <p className={styles.subHeading}>
          <span className={styles.budget}>Budget-Friendly</span> Plans for{" "}
          <span className={styles.hosting}>Everyone</span>
        </p>
        <div className={styles.hostingGridContainer}>
          <HostingPlans
            price="140"
            cpu="150"
            img="https://ik.imagekit.io/kyayaarshahid/COAL.webp"
            ram="4"
            ssd="25"
          >
            Coal Plan
          </HostingPlans>
          <HostingPlans
            price="210"
            cpu="200"
            img="/COPPER.webp"
            ram="6"
            ssd="30"
          >
            Copper Plan
          </HostingPlans>
          <HostingPlans
            price="280"
            cpu="250"
            img="https://ik.imagekit.io/kyayaarshahid/IRON.webp"
            ram="8"
            ssd="35"
          >
            Iron Plan
          </HostingPlans>
          <HostingPlans
            price="350"
            cpu="300"
            img="https://ik.imagekit.io/kyayaarshahid/GOLD.webp"
            ram="10"
            ssd="50"
          >
            Gold Plan
          </HostingPlans>
          <HostingPlans
            price="420"
            cpu="350"
            img="https://ik.imagekit.io/kyayaarshahid/REDSTONE.webp"
            ram="12"
            ssd="55"
          >
            Redstone Plan
          </HostingPlans>
          <HostingPlans
            price="490"
            cpu="400"
            img="https://ik.imagekit.io/kyayaarshahid/LAPIS.webp"
            ram="14"
            ssd="57"
          >
            Lapis Plan
          </HostingPlans>
          <HostingPlans
            price="560"
            cpu="450"
            img="https://ik.imagekit.io/kyayaarshahid/NETHERITE.webp"
            ram="16"
            ssd="60"
          >
            Netherite Plan
          </HostingPlans>
          <HostingPlans
            price="1200"
            cpu="150"
            img="https://ik.imagekit.io/kyayaarshahid/DIAMOND.webp"
            ram="32"
            ssd="100"
            vps={true}
          >
            Diamond Plan
          </HostingPlans>
        </div>
      </div>
      <div ref={add} className={styles.additionalServicesContianer}>
        <h1 className={`${styles.heading} ${styles.h2}`}>
          <span className={styles.budget}>Additional</span> Services
        </h1>
        <p className={styles.desc}>
          Looking to enhance your experience? We offer extra services like “
          <span className={styles.budget}>Premium Panel</span>”, “
          <span className={styles.hosting}>Themes</span>”, “
          <span className={styles.budget}>Plugin Tools</span>" and "
          <span className={styles.hosting}>Domain Registration</span>" to take
          your setup to the next level. Want something more specific? Just hop
          into our Discord — we'll help you get exactly what you need.
        </p>
        <button className={`button ${styles.button}`}>
          <a
            href="https://discord.com/invite/PtyfbrV5Px"
            target="_blank"
            className={styles.linkButton}
          >
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
        <p className={styles.note}>
          Note - Prices for these services are not mentioned here as they are
          subject to vary.
        </p>
      </div>
    </div>
  );
}
