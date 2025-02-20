import Image from "next/image";
import styles from "./thirdSection.module.css";
import {
  MoneyIcon,
  MusicIcon,
  PhoneChatCirlceIcon,
  PrintIcon,
  RideIcon,
  TicketIcon,
  WomanSmileBanner,
} from "@/app/assets";

const ThirdSection = () => {
  return (
    <section id="third-section" className={styles.container}>
      <div className={styles.titleBox}>
        <div>
          <h2>Alguns Recursos do Cardápio Digital</h2>
          <hr className={styles.line} />
        </div>
        <h3>Saia da caixa e venha para a Instant Delivery!</h3>
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.itemBox}>
          <div className={styles.contentItem}>
            <div className={styles.itemTextBoxRight}>
              <h3>Sem comissão</h3>
              <h4>
                Não pague nenhuma taxa sobre as suas vendas nem divida os
                lucros.
              </h4>
            </div>
            <Image
              alt="Icone de um nota de dinheiro"
              width={0}
              height={0}
              src={MoneyIcon}
            />
          </div>
          <div className={styles.contentItem}>
            <div className={styles.itemTextBoxRight}>
              <h3>Impressão de pedidos</h3>
              <h4>Imprima os pedidos para agilzar na cozinha.</h4>
            </div>
            <Image
              alt="Icone de um smartphone"
              width={0}
              height={0}
              src={PrintIcon}
            />
          </div>
          <div className={styles.contentItem}>
            <div className={styles.itemTextBoxRight}>
              <h3>Cupons de desconto</h3>
              <h4>use cupons de descontos para fidelizar clientes.</h4>
            </div>
            <Image
              alt="Icone de um smartphone"
              width={0}
              height={0}
              src={TicketIcon}
            />
          </div>
        </div>
        <div>
          <Image
            alt="Imagem ilustrativa mulher sorrindo"
            width={0}
            height={0}
            src={WomanSmileBanner}
            className={styles.mainBanner}
          />
        </div>
        <div className={styles.itemBox}>
          <div className={styles.contentItem}>
            <Image
              alt="Icone de um smartphone"
              width={0}
              height={0}
              src={RideIcon}
            />
            <div className={styles.itemTextBoxLeft}>
              <h3>Delivery, mesas e balcão</h3>
              <h4>Uma plataforma completa para o seu negócio.</h4>
            </div>
          </div>
          <div className={styles.contentItem}>
            <Image alt="Icone de musica" width={0} height={0} src={MusicIcon} />
            <div className={styles.itemTextBoxLeft}>
              <h3>Notificações de pedidos</h3>
              <h4>
                Através do painel o sistema se notifica sobre um novo pedido.
              </h4>
            </div>
          </div>
          <div className={styles.contentItem}>
            <Image
              alt="Icone de um chat por smartphone"
              width={0}
              height={0}
              src={PhoneChatCirlceIcon}
            />
            <div className={styles.itemTextBoxLeft}>
              <h3>Suporte 24/7</h3>
              <h4>Estaremos de prontidão para auxiliar o seu negócio.</h4>
            </div>
          </div>
        </div>
        <Image
          alt="Imagem ilustrativa mulher sorrindo"
          width={0}
          height={0}
          src={WomanSmileBanner}
          className={styles.mainBannerMobile}
        />
      </div>
    </section>
  );
};

export default ThirdSection;
