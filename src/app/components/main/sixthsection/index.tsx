"use client";

import Image from "next/image";

import styles from "./sixthSection.module.css";
import Accordion from "../../accordion";

const SixthSection = () => {
  return (
    <section id="sixth-section" className={styles.container}>
      <div className={styles.titleBox}>
        <div>
          <h2>Dúvidas frequentes</h2>
          <hr className={styles.line} />
        </div>
      </div>

      <div className={styles.content}>
        <Accordion title="Posso imprimir o pedido?" defaultOpen>
          <h4>
            Com certeza, com apenas 02 cliques, é possível imprimir o pedido em
            nossa plataforma.
          </h4>
        </Accordion>
        <Accordion title="Precisa instalar algum aplicativo?">
          <h4>
            Não. Nosso sistema é totalmente on-line. Basta fazer login em nosso
            site e acessar nosso painel, utilizando somente o navegador de
            internet.
          </h4>
        </Accordion>
        <Accordion title="Consigo colocar fotos dos meus produtos no site?">
          <h4>
            Sim. Nossa plataforma permite a inclusão de fotos dos produtos,
            deixando o cardápio digital com um visual mais bonito e apresentável
            para seu cliente.
          </h4>
        </Accordion>
        <Accordion title="Por que eu preciso do Instant Delivery no meu estabelecimento?">
          <h4>
            Nosso cardápio digital irá automatizar e organizar os seus pedidos
            recebidos no WhatsApp, evitando erros, congestionamento e a
            desistência do cliente por atraso no atendimento. De forma prática e
            rápida, seu cliente irá realizar o pedido com apenas alguns cliques,
            escolhendo os produtos, forma de pagamento e forma de entrega. Além
            disto, temos a opção de agilizar e facilitar o pedido em seu
            restaurante, através de QR CODE por mesa.
          </h4>
        </Accordion>
        <Accordion title="Por que eu preciso do Instant Delivery no meu estabelecimento?">
          <h4>
            Nosso cardápio digital irá automatizar e organizar os seus pedidos
            recebidos no WhatsApp, evitando erros, congestionamento e a
            desistência do cliente por atraso no atendimento. De forma prática e
            rápida, seu cliente irá realizar o pedido com apenas alguns cliques,
            escolhendo os produtos, forma de pagamento e forma de entrega. Além
            disto, temos a opção de agilizar e facilitar o pedido em seu
            restaurante, através de QR CODE por mesa.
          </h4>
        </Accordion>
        <Accordion title="Tem taxa de entrega por bairro e região">
          <h4>
            Não cobramos taxa de adesão. Após o período de teste grátis, seu
            estabelecimento irá pagar somente pelo valor do plano contratado.
          </h4>
        </Accordion>
        <Accordion title="Como eu envio o meu cardápio digital para o cliente?">
          <h4>
            Após o cadastro dos produtos, nosso sistema irá gerar um “link” do
            seu cardápio digital on-line. Este link pode ser enviado ao seu
            cliente através de respostas automáticas de “saudação” do seu
            WhatsApp Business ou pode ser colado na Bio do seu perfil do
            Instagram.
          </h4>
        </Accordion>
        <Accordion title="O cliente precisa realizar cadastro para fazer o pedido? Quais as informações necessárias?">
          <h4>
            Para finalizar o pedido, o cliente irá digitar apenas o “nome”,
            “número do celular” e o “endereço”. Não é necessário digitar o CEP,
            ou seja, sem burocracia.
          </h4>
        </Accordion>
      </div>
    </section>
  );
};

export default SixthSection;
