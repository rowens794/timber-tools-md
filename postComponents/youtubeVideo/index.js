import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

import styles from "./youtubeVideo.module.css";

export default function index({ videoId }) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className="w-96 aspect-video">
          <LiteYouTubeEmbed
            id={videoId} // Default none, id of the video or playlist
            noCookie={true} //Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
          />
        </div>
      </div>
    </div>
  );
}
