import { WagmiProvider, chain } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { providers } from 'ethers'
import { QueryClientProvider, QueryClient } from 'react-query'
import "nes.css/css/nes.min.css"

function App({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({
      chains: [chain.polygonMainnet],
    }),
  ];
  const provider = () =>
    new providers.JsonRpcProvider('https://polygon-rpc.com/');

  const queryClient = new QueryClient();

  return <WagmiProvider autoConnect connectors={connectors} provider={provider}>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  </WagmiProvider>;
}

export default App;
