import styles from "./page.module.css";
import Header from "./components/header";
import Divider from "./components/divider";

import FirstSection from "./components/main/firstSection";
import SecondSection from "./components/main/secondSection";
import ThirdSection from "./components/main/thirdSection";
import FourthSection from "./components/main/fourthSection";
import FifthSection from "./components/main/fifthSection";

function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <FirstSection />
        <Divider />
        <SecondSection />
        <Divider />
        <ThirdSection />
        <Divider />
        <FourthSection />
        <Divider />
        <FifthSection />
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
