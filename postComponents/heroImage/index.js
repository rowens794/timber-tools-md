import React from "react";

import styles from "./heroImage.module.css";

export default function index({ img, title }) {
  return (
    <div className={styles.container}>
      <img src={img} alt={title} title={title} />
    </div>
  );
}
