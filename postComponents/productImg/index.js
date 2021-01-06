import React from "react";

import styles from "./productImg.module.css";

export default function index({ src, alt, title }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={src} alt={alt} title={title} />
    </div>
  );
}
