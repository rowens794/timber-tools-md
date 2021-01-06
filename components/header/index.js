import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
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
    </h2>
  );
}
