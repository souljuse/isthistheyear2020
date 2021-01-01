import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import declarations from "../utils/declarations";

export default function Home() {
  const [declaration, setDeclaration] = useState(declarations[0]);
  const [loading, setLoading] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>What year is it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{declaration}</h1>
        <button
          onClick={() => {
            setLoading(true);

            setTimeout(() => {
              setLoading(false);
              setDeclaration(
                declarations[Math.floor(Math.random() * declarations.length)]
              );
            }, 2500);
          }}
          className={styles.button}
        >
          {loading ? "Checking..." : "Check again"}
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/souljuse/isthistheyear2020/pulls"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute!
          <img src="/github.svg" alt="Github Logo" className={styles.logo} />
        </a>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
