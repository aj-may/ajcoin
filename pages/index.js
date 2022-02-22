import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AJ Coin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div class="nes-container with-title is-centered">
          <p class="title">Container.is-centered</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
      </main>
    </div>
  )
}
