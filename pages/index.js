import Head from "next/head";
import Footer from "../components/Footer/Footer";
import MainContent from "../components/MainContent/MainContent";
import NavBar from "../components/NavBar/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="imset" content="zadanie dla imset" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar />
        <MainContent />
        <Footer />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
