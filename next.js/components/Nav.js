import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a style={{ color: router.pathname === "/" ? "red" : "blue" }}>home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === "/about" ? "red" : "blue" }}>about</a>
      </Link>
    </nav>
  );
};

export default Nav;
