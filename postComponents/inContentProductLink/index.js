import React from "react";
import ReactGA from "react-ga";

export default function index({ href, text }) {
  let clickHandler = () => {
    ReactGA.event({
      category: "outbound",
      action: "click",
      label: `${href}: In-Content Link Click`,
    });
  };

  return (
    <a onClick={clickHandler} href={href}>
      {text}
    </a>
  );
}
