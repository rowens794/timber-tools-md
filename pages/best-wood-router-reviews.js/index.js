import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PostBody from "./postBody";
import ReadMore from "../../components/read-more";
import stories from "../../postComponents/postList";
import styles from "../../postComponents/postStyles.module.css";

export default function tableSawBuyingGuide() {
  return (
    <>
      <div className={styles.postWrapper}>
        <Header />
        <PostBody />
        <ReadMore posts={stories} />
      </div>
      <Footer />
    </>
  );
}
