import styles from "./page.module.css";
import Header from "./components/header";
import FirstSection from "./components/main/firstSection";

function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <FirstSection />
      </main>
      <footer className={styles.footer}>
        <h4>
          INSTANT DELIVERY @ TODOS OS DIREITOS RESERVADOS CNPJ
          38.947.723/0001-75
        </h4>
      </footer>
    </div>
  );
}

export default Home;
