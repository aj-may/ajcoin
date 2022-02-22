import { WagmiProvider, chain } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import "nes.css/css/nes.min.css";

function App({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({
      chains: [chain.polygonMainnet],
    }),
  ];

  return <WagmiProvider autoConnect connectors={connectors}>
    <Component {...pageProps} />
  </WagmiProvider>;
}

export default App;
