import Image from "next/image";
import Link from "next/link";

import { InstantLogo, LogInIcon } from "../../assets";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <Image
        alt="Logo - Instant Delivery"
        src={InstantLogo.src}
        className={styles.logo}
        width={192}
        height={0}
      />
      <ul className={styles.content}>
        <li>
          <Link href="#first-section">Home</Link>
        </li>
        <li>
          <Link href="#first-section">Como funciona?</Link>
        </li>
        <li>
          <Link href="#first-section">Recursos</Link>
        </li>
        <li>
          <Link href="#first-section">QR Code</Link>
        </li>
        <li>
          <Link href="#first-section">Clientes</Link>
        </li>
        <li>
          <Link href="#first-section">Dúvidas</Link>
        </li>
        <li>
          <Link href="#first-section">Nossos números</Link>
        </li>
        <li>
          <Link href="#first-section">Dúvidas</Link>
        </li>
      </ul>
      <button className={styles.loginButton}>
        <Image src={LogInIcon} alt="" width={0} height={0} />
        Login
      </button>
    </header>
  );
};

export default Header;
