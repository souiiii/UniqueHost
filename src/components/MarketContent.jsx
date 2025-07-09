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
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
          <HostingPlans price="140" cpu="150" img="" ram="4" ssd="25">Coal Plan</HostingPlans>
        </div>
      </div>
    </div>
  );
}
