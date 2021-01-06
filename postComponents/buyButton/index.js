import React from "react";
import ReactGA from "react-ga";

import styles from "./buyButton.module.css";

export default function index({ productLink = null, text = "See Price & Reviews on Amazon" }) {
  let clickHandler = () => {
    ReactGA.event({
      category: "outbound",
      action: "click",
      label: `${productLink}: Buy Button Click`,
    });
  };

  return (
    <div className={styles.container} onClick={clickHandler}>
      <a className={styles.link} href={productLink}>
        <p className={styles.button1}>{text}</p>
      </a>
    </div>
  );
}
