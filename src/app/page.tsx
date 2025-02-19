import styles from "./page.module.css";
import Header from "./components/header";
import Divider from "./components/divider";

import FirstSection from "./components/main/firstSection";
import SecondSection from "./components/main/secondSection";
import ThirdSection from "./components/main/thirdSection";
import FourthSection from "./components/main/fourthSection";
import FifthSection from "./components/main/fifthSection";
import SixthSection from "./components/main/sixthsection";
import Footer from "./components/foooter";

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
        <Divider />
        <SixthSection />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
