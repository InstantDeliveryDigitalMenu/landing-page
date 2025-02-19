import Image from "next/image";
import styles from "./secondSection.module.css";
import { CheckIcon, PhoneChatIcon, PhoneIcon } from "@/app/assets";

const SecondSection = () => {
  return (
    <section id="second-section" className={styles.container}>
      <div className={styles.titleBox}>
        <div>
          <h2>Como Funciona?</h2>
          <hr className={styles.line} />
        </div>
        <h3>Rapidez para seu cliente, eficiência para seu negócio.</h3>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.itemBox}>
          <Image
            alt="Icone de um smartphone"
            width={0}
            height={0}
            src={PhoneIcon}
          />
          <h3>O cliente acessa o Cardápio Digital...</h3>
          <h4>
            ...e escolhe os produtos destacados no cardápio e a forma de entrega
          </h4>
        </div>
        <div className={styles.itemBox}>
          <Image
            alt="Icone de um simbolo de check"
            width={0}
            height={0}
            src={CheckIcon}
          />
          <h3>Finaliza o seu pedido sem fazer cadastro...</h3>
          <h4>
            Escolha seu restaurante favorito, veja o cardápio, escolha seu
            lanche e faça o pedido.
          </h4>
        </div>
        <div className={styles.itemBox}>
          <Image
            alt="Icone de chat no telefone"
            width={0}
            height={0}
            src={PhoneChatIcon}
          />
          <h3>Organização do pedido facilitada...</h3>
          <h4>
            ...o pedido chega direto no seu WhatsApp de forma organizada e
            pronto para impressão.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
