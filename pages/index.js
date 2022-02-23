import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="nes-container with-title is-centered">
          <p className="title">AJ Coin</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
      </main>
    </div>
  )
}
