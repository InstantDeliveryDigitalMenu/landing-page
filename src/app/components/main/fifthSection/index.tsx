import Image from "next/image";
import styles from "./fifthSection.module.css";
import { DeskIcon, QRCodeIcon } from "@/app/assets";

const FifthSection = () => {
  return (
    <section id="secondSection" className={styles.container}>
      <div className={styles.titleBox}>
        <div>
          <h2>Clientes Satisfeitos</h2>
          <hr className={styles.line} />
        </div>
        <h3>Quem usa recomenda</h3>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.itemBox}>
          <Image
            alt="Icone de um smartphone"
            width={0}
            height={0}
            src={QRCodeIcon}
          />
          <h3>Cardápio digital em segundos</h3>
          <h4>
            Com o QR Code na mesa, o cliente navega no cardápio digital sem
            complicações, proporcionando uma experiência moderna e prática.
          </h4>
        </div>
        <div className={styles.itemBox}>
          <Image
            alt="Icone de um simbolo de check"
            width={0}
            height={0}
            src={DeskIcon}
          />
          <h3>Controle total na palma da mão</h3>
          <h4>
            O dashboard do Instant Delivery oferece insights em tempo real para
            uma gestão eficiente do cardápio digital e pedidos.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
