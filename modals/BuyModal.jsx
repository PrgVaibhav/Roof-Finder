"use client";

import styles from "../styles/Modal.module.scss";
export default function BuyModal({ header, desc, setOpenModal }) {
  return (
    <section className={styles.modal_container}>
      <div className={styles.modal}>
        <h1>{header}</h1>
        <p>{desc}</p>
        <button
          className={styles.modal_btn}
          onClick={() => {
            setOpenModal(false);
          }}
        >
          Okay! Close
        </button>
      </div>
    </section>
  );
}
