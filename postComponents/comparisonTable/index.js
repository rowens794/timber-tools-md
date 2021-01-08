import React from "react";
import ReactGA from "react-ga";

import styles from "./comparisonTable.module.css";

export default function index({ list }) {
  let keys = Object.keys(list[0]);

  //create the table headings
  //center all but the first element (product name)
  //don't produce a heading for the amazon button
  let tableHeadings = keys.map((key, i) => {
    if (key === "Amazon Link") {
      return <th className={styles.th} key={key}></th>;
    } else {
      if (i > 0) {
        return (
          <th key={key} className={styles.th} style={{ textAlign: "center" }}>
            {key}
          </th>
        );
      } else {
        return (
          <th className={styles.th} key={key}>
            {key}
          </th>
        );
      }
    }
  });

  //create the elements
  //center all but the first element (product name)
  let items = list.map((item, i) => {
    let tableRow = keys.map((key, j) => {
      if (key === "Amazon Link") {
        return (
          <td key={key} className={styles.td}>
            <BuyButton productLink={item[key]} text="See Product" />
          </td>
        );
      } else if (j > 0) {
        return (
          <td key={key} style={{ textAlign: "center" }} className={styles.td}>
            {item[key]}
          </td>
        );
      } else
        return (
          <td className={styles.td} key={key}>
            {item[key]}
          </td>
        );
    });
    return (
      <tr className={styles.tr} key={i}>
        {tableRow}
      </tr>
    );
  });

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>{tableHeadings}</tr>
      </thead>
      <tbody>{items}</tbody>
    </table>
  );
}

const BuyButton = ({ productLink = null, text = "See Price & Reviews on Amazon" }) => {
  let clickHandler = () => {
    console.log("clicked");
    ReactGA.event({
      category: "outbound",
      action: "click",
      label: `${productLink}: Buy Button Click`,
    });
  };

  return (
    <a className={styles.link} href={productLink} onClick={clickHandler} target="_blank">
      <p className={styles.button1}>{text}</p>
    </a>
  );
};
