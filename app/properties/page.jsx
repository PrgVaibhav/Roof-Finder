"use client";
import { PropertiesData } from "../../data/PropertiesData";
import styles from "../../styles/properties.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaBed } from "react-icons/fa";
import { MdBathtub } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { BsCurrencyRupee } from "react-icons/bs";
import Loading from "@/components/Loading";
export default function Properties() {
  const [filteredType, setFilteredType] = useState([]);
  const [activeBtn, setActiveBtn] = useState(false);
  // const [loading, setLoading] = useState(false);
  // const [currentPropertyType, setCurrentPropertyType] = useState("all");

  const type = PropertiesData.map((property) => {
    return property.propertyType;
  });

  const uniqueType = [...new Set(type)];

  const btnValues = [...uniqueType];

  const filterData = (type) => {
    const filteredData = PropertiesData.filter((property) => {
      return property.propertyType === type;
    });
    setFilteredType(filteredData);
    setActiveBtn(!activeBtn);
  };

  useEffect(() => {
    setFilteredType(PropertiesData);
    // const timer = setTimeout(() => {
    //   setLoading(true);
    // }, 2000);

    // return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.properties_container}>
      <div className={styles.properties_header}>
        <div className={styles.btn_group}>
          {btnValues?.map((btnValue) => {
            return (
              <button
                className={`${activeBtn} ? ${styles.btn} ${styles.active} :${styles.btn} `}
                key={btnValue}
                onClick={() => filterData(btnValue)}
              >
                {btnValue}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.featured_cards}>
        {PropertiesData.map((property) => {
          if (property.propertyType === "home") {
            <p>Home</p>;
          } else if (property.propertyType === "interior") {
            <p>Interior</p>;
          } else {
            <p>All</p>;
          }
        })}
        {filteredType.map((property) => {
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
                // onClick={clickHandler}
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
