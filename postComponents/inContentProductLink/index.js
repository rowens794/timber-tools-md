import React from "react";
import ReactGA from "react-ga";

export default function index({ href, text }) {
  let clickHandler = () => {
    ReactGA.event({
      category: "outbound",
      action: "click",
      label: `${productLink}: In-Content Link Click`,
    });
  };

  return (
    <div onClick={clickHandler}>
      <a href={href}>{text}</a>
    </div>
  );
}
