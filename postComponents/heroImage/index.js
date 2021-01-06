import React from "react";

import styles from "./heroImage.module.css";

export default function index({ img }) {
  return (
    <div className={styles.container}>
      <img src={img} />
    </div>
  );
}
