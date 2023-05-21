"use client";

import Image from "next/image";
import styles from "../styles/FeaturedProperties.module.scss";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import { PropertiesData } from "../data/PropertiesData";
import BuyModal from "@/modals/buyModal";
import { useState } from "react";

export default function FeaturedProperties() {
  const [openModal, setOpenModal] = useState(false);
  const filteredType = PropertiesData.filter(
    (property) => property.propertyType === "interior"
  );

  const sortFourProperty = filteredType.slice(0, 4);

  const clickHandler = () => {
    setOpenModal(true);
  };
  return (
    <section className={styles.feature_container}>
      {openModal && (
        <BuyModal
          header="Woohoo you're one step closer to your dream home!"
          desc="Thank you for showing interest in this property we have informed the
        owner about your interest and they will be in touch with you shortly.
        If you have any questions please feel free to contact us at
        123-456-7890."
          setOpenModal={setOpenModal}
        />
      )}
      <h1 className={styles.feature_header}>Featured Properties</h1>
      <p className={styles.feature_para}>
        Here are a few of our favorite properties interior.
      </p>

      <div className={styles.featured_cards}>
        {sortFourProperty.map((property) => {
          return (
            <div className={styles.featured_card} key={property.propertyId}>
              <Image
                src={property.propertyImage}
                alt="property"
                priority={true}
                sizes="100vw"
                width={0}
                height={0}
                style={{ width: "100%", height: "auto" }} // optional
                className={styles.card_img}
              />
              <h2>{property.propertyName}</h2>
              <p>{property.propertyDescription}</p>

              <div className={styles.border_top}></div>
              <div className={styles.featured_card_details}>
                <p>
                  <BsCurrencyRupee className={styles.icon} />: $100,000
                </p>
                <p>
                  <FaBed className={styles.icon} /> : 3
                </p>
                <p>
                  <MdBathtub className={styles.icon} /> : 2
                </p>
                <p>
                  <IoLocationSharp className={styles.icon} /> : City, State
                </p>
              </div>
              <button
                className={styles.featured_card_btn}
                onClick={clickHandler}
              >
                Show Interest
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
