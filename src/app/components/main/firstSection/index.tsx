import Image from "next/image";

import InputText from "../../input-text";
import { MainBanner } from "../../../assets";

import styles from "./firstSection.module.css";

const FirstSection = () => {
  const handleSubmit = (event: FormData) => {
    console.log("Form submitted");
    console.log(event);
  };

  return (
    <section id="first-section" className={styles.container}>
      <div className={styles.firstSide}>
        <Image
          src={MainBanner}
          alt="Simplifique o atendimento do seu restaurante com nosso Cardápio Digital | Fique ligado! Uma nova experiência com a Instant Delivery vem por ai! | Notebook com cardápio digital na tela."
          width={0}
          height={0}
          className={styles.image}
        />
      </div>
      <form className={styles.lastSide}>
        <h3>Aproveite nossa oferta com até 50% de desconto:</h3>
        <InputText placeholder="Seu nome" label="Nome" />
        <InputText placeholder="seu@melhoremail.com.br" label="E-mail" />
        <InputText placeholder="(00) 00000-0000" label="Whatsapp" />
        <InputText
          placeholder="Nome do Restaurante"
          label="Nome do restaurante "
        />
        <div className={styles.buttonBox}>
          <button className={styles.button}>Iniciar Teste</button>
        </div>
      </form>
    </section>
  );
};

export default FirstSection;
