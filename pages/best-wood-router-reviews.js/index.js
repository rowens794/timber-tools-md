import React from "react";
import { useRouter } from "next/router";

import Header from "../../components/header";
import Footer from "../../components/footer";
import PostBody from "./postBody";
import ReadMore from "../../components/read-more";
import stories from "../../postComponents/postList";
import styles from "../../postComponents/postStyles.module.css";
import helpers from "../../postComponents/helpers";

export default function index({ postObj }) {
  const router = useRouter();

  return (
    <>
      <div className={styles.postWrapper}>
        <Header />
        {/* <PostBody props={postObj[router.pathname.replace("/", "")]} /> */}
        <ReadMore posts={stories} />
      </div>
      <Footer />
    </>
  );
}

// export async function getStaticProps() {
//   let postObj = helpers.getTitleAndHero();

//   return {
//     props: { postObj },
//   };
// }
