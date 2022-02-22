import { MongoClient } from 'mongodb';
import { ethers } from 'ethers';

const client = new MongoClient(process.env.MONGO_URI);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' });

  const { address, code } = req.query;

  try {
    await client.connect();
    const result = await client.db('ajcoin').collection('airdrops').findOne({ code }, { _id: false });

    if (!result) res.status(404).json({ error: 'Not Found' });

    const { nonce, quantity, reason } = result;

    if (!address) return res.status(200).json({ nonce, quantity, reason });

    const wallet = new ethers.Wallet(process.env.SYSTEM_KEY);
    const hash = ethers.utils.solidityKeccak256(['address', 'uint256', 'uint256'], [address, quantity, nonce]);
    const signature = await wallet.signMessage(ethers.utils.arrayify(hash));
    
    res.status(200).json({ nonce, quantity, reason, signature });
  } catch(err) {
    console.error(err);
    res.status(500).json({ error: err.name });
  } finally {
    await client.close();
  }
}
