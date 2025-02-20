"use client";

import Image from "next/image";

import {
  CheckIcon,
  EmployeeIcon,
  HandShakeIcon,
  SmileIcon,
} from "@/app/assets";

import styles from "./sixthSection.module.css";

const SixthSection = () => {
  return (
    <section id="sixth-section" className={styles.container}>
      <div className={styles.titleBox}>
        <div>
          <h2>Nossos números</h2>
          <hr className={styles.line} />
          <h4>
            Contamos com clientes satisfeitos por todo território nacional
          </h4>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.itemBox}>
          <Image src={SmileIcon} alt="Icone de rosto sorrindo" />
          <div>
            <h3>680</h3>
            <h3>Clientes Satisfeitos</h3>
          </div>
        </div>
        <div className={styles.itemBox}>
          <Image src={EmployeeIcon} alt="Icone de colaboradores" />
          <div>
            <h3>35</h3>
            <h3>Colaboradores</h3>
          </div>
        </div>
        <div className={styles.itemBox}>
          <Image src={CheckIcon} alt="Icone de rosto sorrindo" />
          <div>
            <h3>1.100</h3>
            <h3>Cardápios Entregues</h3>
          </div>
        </div>
        <div className={styles.itemBox}>
          <Image src={HandShakeIcon} alt="Icone de rosto sorrindo" />
          <div>
            <h3>680</h3>
            <h3>Clientes Satisfeitos</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SixthSection;
