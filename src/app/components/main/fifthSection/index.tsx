"use client";

import Image from "next/image";

import {
  CasaRoxaLogo,
  CaveiraBurguerLogo,
  SanduicheBetaoLogo,
  SorveteriaReiLogo,
} from "@/app/assets/mock";
import { CommentIcon } from "@/app/assets";
import Carrosel from "../../carrosel";

import styles from "./fifthSection.module.css";

const comments = [
  {
    id: 1,
    name: "Sorveteria Rei",
    from: "Sorriso - MT",
    image: SorveteriaReiLogo,
    comment:
      "O sistema de QR CODE é muito bom, e está me atendendo bem. Facilita bastante no momento de alto fluxo no salão da sorveteria, diminuindo a quantidade de atendentes. Com a plataforma do Instant Delivery, foi possível reduzir R$ 800,00 do nosso custo mensal com garçons.",
  },
  {
    id: 2,
    name: "Caveira's Burguer",
    from: "São João Batista - SC",
    image: CaveiraBurguerLogo,
    comment:
      "Eu estou gostando muito do sistema. Consigo organizar os meus pedidos e parei de perder vendas no WhatsApp por atraso no atendimento. Atende todas as necessidades da minha hamburgueria.",
  },
  {
    id: 3,
    name: "Casa Roxa Açai",
    from: "Uberlândia-MG",
    image: CasaRoxaLogo,
    comment:
      "O que eu mais gosto no sistema é a praticidade, com poucos cliques os nossos clientes já fazem o pedido, e com apenas um clique eu já consigo imprimir. Além de ter um layout mais limpo, o nosso cardápio digital ficou muito mais bonito com as fotos, mostrando profissionalismo e passando credibilidade para nossos clientes!",
  },
  {
    id: 4,
    name: "Sanduiches do Betão",
    from: "Belo Horizonte - MG",
    image: SanduicheBetaoLogo,
    comment:
      "Sistema incrível e super em conta. Facilidade para todo o time manusear e feedback positivo dos cliente para fazer o pedido. Além do suporte 24 horas, sempre dispostos a atender quando precisamos. Tem 02 anos que uso o sistema, me ajudou bastante a organizar minhas vendas.",
  },
];

const FifthSection = () => {
  const formatComments = comments.map((comment) => {
    return {
      key: comment.id,
      content: (
        <div className={styles.itemBox}>
          <div className={styles.titleContentBox}>
            <div className={styles.contentTitle}>
              <Image
                alt={`Logo da empresa ${comment.name}`}
                width={0}
                height={0}
                src={comment.image}
              />

              <div>
                <h3>{comment.name}</h3>
                <h4>{comment.from}</h4>
              </div>
            </div>
            <Image
              alt="Icone de comentário"
              width={0}
              height={0}
              src={CommentIcon}
            />
          </div>
          <div className={styles.commentBox}>
            <h4>{comment.comment}</h4>
          </div>
        </div>
      ),
    };
  });

  return (
    <section id="secondSection" className={styles.container}>
      <div className={styles.titleBox}>
        <div>
          <h2>Clientes Satisfeitos</h2>
          <hr className={styles.line} />
        </div>
        <h3>Quem usa recomenda</h3>
      </div>

      <Carrosel
        carroselData={formatComments}
        className={styles.contentWrapper}
        liClassName={styles.itemBox}
        width={368}
      />
    </section>
  );
};

export default FifthSection;
