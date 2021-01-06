import { CMS_NAME } from "../../lib/constants";
import Link from "next/link";
import Image from "next/image";

import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className={styles.grid}>
        <Link href="/">
          <a className="hover:underline">
            <Image
              src="https://res.cloudinary.com/dfebwzrhb/image/upload/v1609522289/TimberTools/Logo.jpg"
              alt="Timber & Tools"
              width={577 / 4}
              height={368 / 4}
            />
          </a>
        </Link>

        <div className={styles.buildAShop}>
          {/* <Link href="/">
            <a className={styles.buildAShopButton}>Build Your Shop on A Budget</a>
          </Link> */}
        </div>
      </div>
    </section>
  );
}
