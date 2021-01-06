import React from "react";
import Link from "next/link";

export default function index({ href, text }) {
  let clickHandler = () => {
    console.log("click");
  };

  return (
    <a href={href} onClick={clickHandler}>
      {text}
    </a>
  );
}
