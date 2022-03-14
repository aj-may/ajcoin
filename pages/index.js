import Faqs from 'components/Faqs'
import Features from 'components/Features'
import Hero from 'components/Hero'
import Team from 'components/Team'

export default function Home() {
  return <>
    <Hero />
    <Features />
    <Faqs />
    <Team />
    {/* 
      <a href="https://github.com/aj-may/ajcoin" target="_blank" style={{ color: 'gray', margin: '1rem' }}>github</a>
      <a href="https://polygonscan.com/address/0x0DcBfa223d69edadB70c90F12B014fcFF8D281b2" target="_blank" style={{ color: 'gray', margin: '1rem' }}>polygonscan</a>
      <a href="https://polygon.sushi.com/en/swap?inputCurrency=0x0DcBfa223d69edadB70c90F12B014fcFF8D281b2" target="_blank" style={{ color: 'gray', margin: '1rem' }}>sushi</a>
    */}
  </>;
}
