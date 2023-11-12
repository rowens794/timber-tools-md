import Link from "next/link";
import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="flex justify-between">
          <p className="py-4">
            As an Amazon Associate I earn from qualifying purchases.
          </p>
          <div className=" my-auto flex gap-4 ">
            <Link legacyBehavior href={"/about-us"}>
              <a className="font-light">About Us</a>
            </Link>
            <Link legacyBehavior href={"/privacy-policy"}>
              <a className="font-light">Privacy Policy</a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
