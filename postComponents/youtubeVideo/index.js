import React from "react";
import Youtube from "react-lazyload-youtube";
import "react-lazyload-youtube/dist/index.css";

import styles from "./youtubeVideo.module.css";

export default function index({ videoId }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Youtube width="400px" height="250px" videoId={videoId} className={styles.container} />
      </div>
    </div>
  );
}
