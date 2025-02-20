import Accordion from "../../accordion";

import styles from "./seventhSection.module.css";

const SeventhSection = () => {
  return (
    <section id="seventh-section" className={styles.container}>
      <div className={styles.titleBox}>
        <div>
          <h2>SEU RESTAURANTE AINDA ATENDE ASSIM?</h2>
          <hr className={styles.line} />
          <h4>Assista o vídeo abaixo:</h4>
        </div>
      </div>

      <div className={styles.content}>
        <iframe
          width="860"
          height="480"
          src="https://www.youtube.com/embed/gIeLxWj_BAQ"
          title="Agilize e organize seu atendimento no WhatsApp com o nosso cardápio digital."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
};

export default SeventhSection;
