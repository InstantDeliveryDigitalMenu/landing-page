"use client";

import Image from "next/image";
import Link from "next/link";

import { InstantLogo, LogInIcon, MenuIcon } from "../../assets";
import styles from "./header.module.css";
import { useState } from "react";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.containerDesk}>
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
            <Link href="#second-section">Como funciona?</Link>
          </li>
          <li>
            <Link href="#third-section">Recursos</Link>
          </li>
          <li>
            <Link href="#fourth-section">QR Code</Link>
          </li>
          <li>
            <Link href="#fifth-section">Clientes</Link>
          </li>
          <li>
            <Link href="#sixth-section">Nossos números</Link>
          </li>
          <li>
            <Link href="#seventh-section">Demo</Link>
          </li>
          <li>
            <Link href="#eigth-section">Dúvidas</Link>
          </li>
        </ul>
        <button className={styles.loginButton}>
          <Image src={LogInIcon} alt="" width={0} height={0} />
          Entrar
        </button>
      </div>
      <div className={styles.containerMobile}>
        <div className={styles.logoBoxMobile}>
          <Image
            src={MenuIcon}
            alt="Menu mobile icon"
            className={styles.menuImage}
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          />
          <Image
            alt="Logo - Instant Delivery"
            src={InstantLogo.src}
            className={styles.logo}
            width={1000}
            height={1000}
          />
        </div>
        <button
          className={styles.loginButton}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <Image src={LogInIcon} alt="" width={0} height={0} />
          Entrar
        </button>
        <div
          className={styles.shadowBox}
          data-state={isOpenMenu ? "open" : "closed"}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          <div className={styles.contentMobile}>
            <div className={styles.logoBoxMobile}>
              <Image
                src={MenuIcon}
                alt="Menu mobile icon"
                className={styles.menuImage}
              />
              <Image
                alt="Logo - Instant Delivery"
                src={InstantLogo.src}
                className={styles.logo}
                width={1000}
                height={1000}
              />
            </div>
            <ul className={styles.menuList}>
              <li>
                <Link href="#first-section">Home</Link>
              </li>
              <li>
                <Link href="#second-section">Como funciona?</Link>
              </li>
              <li>
                <Link href="#third-section">Recursos</Link>
              </li>
              <li>
                <Link href="#fourth-section">QR Code</Link>
              </li>
              <li>
                <Link href="#fifth-section">Clientes</Link>
              </li>
              <li>
                <Link href="#sixth-section">Nossos números</Link>
              </li>
              <li>
                <Link href="#seventh-section">Demo</Link>
              </li>
              <li>
                <Link href="#eigth-section">Dúvidas</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
