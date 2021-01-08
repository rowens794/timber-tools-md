import React from "react";

import styles from "./productFeatures.module.css";

export default function index({ features, heading = "Product Features" }) {
  let featureSet = features.map((feature) => {
    return <li>{feature}</li>;
  });

  return (
    <div className={styles.container}>
      <h4 className={styles.heading}>{heading}</h4>
      <div className={styles.featureContainer}>
        <ul>{featureSet}</ul>
      </div>
    </div>
  );
}
