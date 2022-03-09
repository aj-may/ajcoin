import Head from 'next/head'
import { WagmiProvider, chain } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { providers } from 'ethers'
import { QueryClientProvider, QueryClient } from 'react-query'
import 'styles/global.css';
import Layout from 'components/Layout'

function App({ Component, pageProps }) {
  const connectors = [
    new InjectedConnector({
      chains: [chain.polygonMainnet],
    }),
  ];
  const provider = () =>
    new providers.JsonRpcProvider('https://polygon-rpc.com/');

  const queryClient = new QueryClient();

  return <>
    <Head>
      <title>AJ Coin</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <WagmiProvider autoConnect connectors={connectors} provider={provider}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </WagmiProvider>
  </>;
}

export default App;
