import Image from "next/image";
import Link from "next/link";

import styles from "./coverImage.module.css";

export default function CoverImage({ title, src, slug, height, width }) {
  return (
    <Link as={`/${slug}`} href="/[slug]">
      <a>
        <div className={styles.container}>
          <Image src={src} alt={`Cover Image for ${title}`} className={styles.image} layout="responsive" width={width} height={height} />
        </div>
      </a>
    </Link>
  );
}
