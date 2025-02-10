import Image from "next/image";

import { InstantLogo } from "../../assets";
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
        <li>Home</li>
        <li>Como funciona?</li>
        <li>Recursos</li>
        <li>QR Code</li>
        <li>Clientes</li>
        <li>Dúvidas</li>
        <li>Nossos números</li>
        <li>Dúvidas</li>
      </ul>
      <button className={styles.loginButton}>LOGIN</button>
    </header>
  );
};

export default Header;
