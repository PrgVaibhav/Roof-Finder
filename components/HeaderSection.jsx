import Link from "next/link";
import styles from "../styles/HeaderSection.module.scss";
export default function HeaderSection() {
  return (
    <section className={styles.section_container}>
      <div className={styles.section_card}>
        <h1 className={styles.section_header}>Roof Finder</h1>
        <p className={styles.section_para}>
          Whether you're looking for a cozy starter home or a spacious family
          estate, Roof Finder has you covered. Our website features a wide
          selection of homes from across the country, with detailed information
          on each property including photos, virtual tours, and pricing
          information.
        </p>
        <p className={styles.section_para}>
          At Roof Finder, we are committed to making the home buying process as
          seamless and stress-free as possible. So why wait? Start your search
          today and find the home of your dreams with Roof Finder.
        </p>
        <Link href="/properties" className={styles.section_link}>
          Find Properties
        </Link>
      </div>
    </section>
  );
}
