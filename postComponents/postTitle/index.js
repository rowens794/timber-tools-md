import React from "react";

import styles from "./postTitle.module.css";

export default function index({ title }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}
