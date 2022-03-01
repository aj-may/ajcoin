import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="nes-container with-title is-centered">
          <p className="title">AJ Coin</p>
          <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
        </div>
        <p style={{ padding: '2rem' }}>
          <a href="https://github.com/aj-may/ajcoin" target="_blank" style={{ color: 'gray', margin: '1rem' }}>github</a>
          <a href="/whitepaper.pdf" target="_blank" style={{ color: 'gray', margin: '1rem' }}>whitepaper</a>
          <a href="https://polygonscan.com/address/0x0DcBfa223d69edadB70c90F12B014fcFF8D281b2" target="_blank" style={{ color: 'gray', margin: '1rem' }}>polygonscan</a>
          <a href="https://polygon.sushi.com/en/swap?inputCurrency=0x0DcBfa223d69edadB70c90F12B014fcFF8D281b2" target="_blank" style={{ color: 'gray', margin: '1rem' }}>sushi</a>
        </p>
      </main>
    </div>
  )
}
