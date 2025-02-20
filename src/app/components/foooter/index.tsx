import Image from "next/image";

import { FacebookIcon, InstagramIcon, WhatsappIcon } from "@/app/assets/social";
import { InstantLogo } from "@/app/assets";

import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.logoBox}>
          <Image src={InstantLogo} alt="Instant Delivery Logo" />
          <div>
            <h4 className={styles.title}>Instant Delivery</h4>
            <div className={styles.description}>
              <h4>
                Rua Cassiterita, Nº 1501, Bairro: Santa Inês CEP: 31080-150,
                Belo Horizonte/Minas Gerais
              </h4>
            </div>
          </div>
        </div>
        <div className={styles.socialBox}>
          <h4 className={styles.title}>Social</h4>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=553172450685&text=Ol%C3%A1,%20vim%20do%20site%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Card%C3%A1pio%20Digital"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={WhatsappIcon} alt="Whatsapp Logo" width={35} />
            </a>
            <a
              href="https://www.instagram.com/instantdeliveryoficial?igsh=MTN0azl1d2ozc2xiYw=="
              target="_blank"
              rel="noreferrer"
            >
              <Image src={InstagramIcon} alt="Instagram Logo" width={35} />
            </a>
            <a
              href="https://www.facebook.com/instantdelivery.bh"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={FacebookIcon} alt="Facebook Logo" width={35} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
