import React from "react";

import styles from "./buyButton.module.css";

export default function index({ productLink = null, text = "See Price & Reviews on Amazon" }) {
  return (
    <div className={styles.container}>
      <a className={styles.link} href={productLink}>
        <p className={styles.button1}>{text}</p>
      </a>
    </div>
  );
}
