import HostingPlans from "./HostingPlans";
import styles from "./MarketContent.module.css";

export default function MarketContent() {
  return (
    <div className={styles.parent}>
      <div className={styles.hostingsParentContainer}>
        <h1 className={styles.heading}>
          <span className={styles.hosting}>Hosting</span> MarketPlace
        </h1>
        <p className={styles.subHeading}>
          <span className={styles.budget}>Budget-Friendly</span> Plans for{" "}
          <span className={styles.hosting}>Everyone</span>
        </p>
        <div className={styles.hostingGridContainer}>
          <HostingPlans price="140" cpu="150" img="/COAL.png" ram="4" ssd="25">
            Coal Plan
          </HostingPlans>
          <HostingPlans price="210" cpu="200" img="/COPPER.webp" ram="6" ssd="30">
            Copper Plan
          </HostingPlans>
          <HostingPlans price="280" cpu="250" img="/IRON.webp" ram="8" ssd="35">
            Iron Plan
          </HostingPlans>
          <HostingPlans
            price="350"
            cpu="300"
            img="/GOLD.webp"
            ram="10"
            ssd="50"
          >
            Gold Plan
          </HostingPlans>
          <HostingPlans
            price="420"
            cpu="350"
            img="/REDSTONE.webp"
            ram="12"
            ssd="55"
          >
            Redstone Plan
          </HostingPlans>
          <HostingPlans
            price="490"
            cpu="400"
            img="/LAPIS.webp"
            ram="14"
            ssd="57"
          >
            Lapis Plan
          </HostingPlans>
          <HostingPlans
            price="560"
            cpu="450"
            img="/NETHERITE.webp"
            ram="16"
            ssd="60"
          >
            Netherite Plan
          </HostingPlans>
          <HostingPlans
            price="1200"
            cpu="150"
            img="/DIAMOND.webp"
            ram="32"
            ssd="100"
            vps={true}
          >
            Diamond Plan
          </HostingPlans>
        </div>
      </div>
    </div>
  );
}
