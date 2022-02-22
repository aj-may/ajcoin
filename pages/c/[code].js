import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { useConnect, useAccount, useNetwork, useContractRead, useContractWrite } from 'wagmi'
import clsx from 'clsx';
import AJCoin from '../../AJCoin.json'

async function fetchClaim({ queryKey }) {
  const [_key, { code, address }] = queryKey;
  const addressQuery = address ? `?address=${address}` : '';
  const response = await fetch(`/api/claims/${code}${addressQuery}`);

  if (response.status == 404) throw new Error('Invalid airdrop code');
  if (!response.ok) throw new Error(`Error: ${response.statusText}`);

  return response.json();
}

function ClaimButton({ claim }) {
  const [{ data: chainData, error: chainError, loading: chainLoading }, switchNetwork] = useNetwork();
  const [{ data: nonceUsed, error: nonceError, loading: nonceLoading }] = useContractRead(AJCoin, '_nonceUsed', { args: [claim.nonce] });
  const [{ data, error, loading }, write] = useContractWrite(AJCoin, 'mint');

  const handleChangeNet = () => switchNetwork(137);
  const handleClaim = () => write({ args: [claim.quantity, claim.nonce, claim.signature]});

  if (chainLoading || nonceLoading) return <p>Loading...</p>;
  if (chainData.chain.unsupported) return <>
    <button type="button" className="nes-btn" onClick={handleChangeNet}>Switch to Polygon Mainnet</button>
    {chainError && <p>{chainError.message}</p>}
  </>;
  if (nonceError) return <p>{nonceError.message}</p>;
  if (nonceUsed) return <p>Airdrop already claimed</p>;
  if (data) return <p>Tokens Claimed! View transaction on <a href={`https://polygonscan.com/tx/${data.hash}`} target="_blank">Polygonscan</a></p>

  return <>
    <button type="button" className={clsx("nes-btn", loading && "is-disabled")} disabled={loading} onClick={handleClaim}>Claim Tokens</button>
    {error && <p>{error.message}</p>}
  </>;
}

function Claim() {
  const router = useRouter();
  const { code } = router.query;

  const [{ data: account }] = useAccount();
  const address = account ? account.address : null
  const { isLoading, error, data } = useQuery(['claim', { code, address }], fetchClaim, { enabled: !!code });
  const [{ data: { connected, connectors }, error: connectError, loading: connectLoading }, connect] = useConnect();

  const handleConnect = () => connect(connectors[0]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return <>
    <h1>You have been air dropped {data?.quantity} AJ Coins for {data?.reason}!</h1>
    {!connected && <>
      <button type="button" className={clsx("nes-btn", connectLoading && "is-disabled")} disabled={connectLoading} onClick={handleConnect}>Connect to Claim Tokens</button>
      {connectError && <p>{connectError.message}</p>}
    </>}
    {connected && <ClaimButton claim={data} />}
  </>;
}
  
export default Claim