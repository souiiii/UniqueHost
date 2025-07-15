import styles from './HostingPlans.module.css';

export default function HostingPlans({children, price, ram, cpu, ssd, vps=false, img}) {
  return (
    <div className={styles.hostingContainer}>
      <div className={`${styles.vps} ${!vps && styles.visible}`}>VPS</div>
      <h1 className={styles.hostingName}>{children}</h1>
      <div className={styles.hostingImageDiv}>
        <img
          className={styles.hostingImage}
          // loading="lazy"
          alt="block image"
          src={img}
        />
      </div>
      <div className={styles.price}>Rs. {price} / month</div>
      <div className={styles.hostingDetailsDiv}>
        <div className={styles.hotingDetail}>
          <div className={styles.hostingDetailSvgContainer}></div>
          <p className={styles.hostingDetailText}>{ram} GB DDR4 RAM</p>
        </div>
        <div className={styles.hotingDetail}>
          <div className={styles.hostingDetailSvgContainer}></div>
          <p className={styles.hostingDetailText}>{cpu}% CPU Usage</p>
        </div>
        <div className={styles.hotingDetail}>
          <div className={styles.hostingDetailSvgContainer}></div>
          <p className={styles.hostingDetailText}>{ssd} GB NVME SSD</p>
        </div>
        <a
          target="_blank"
          href="https://discord.com/invite/PtyfbrV5Px"
          className={`button ${styles.button}`}
        >
          Order Now→
        </a>
      </div>
    </div>
  );
}