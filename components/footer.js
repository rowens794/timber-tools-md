import Link from "next/link";
import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div style={{ height: "50px", padding: "10px", textAlign: "right" }}>
          <Link href={"/about-us"}>
            <a style={{ margin: "25px", color: "darkGrey" }}>About Us</a>
          </Link>
          <Link href={"/privacy-policy"}>
            <a style={{ margin: "25px", color: "darkGrey" }}>Privacy Policy</a>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
