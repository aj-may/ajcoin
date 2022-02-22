require('dotenv').config();
const { nanoid } = require('nanoid');
const { MongoClient } = require('mongodb');

const client = new MongoClient(process.env.MONGO_URI);

const main = async () => {
  const code = nanoid(10);
  const quantity = parseInt(process.argv[2]);
  const reason = process.argv[3];

  try {
    await client.connect();
    const [last] = await client.db('ajcoin').collection('airdrops').find().sort({ nonce: -1 }).limit(1).toArray();
    const nonce = last.nonce + 1;
    await client.db('ajcoin').collection('airdrops').insertOne({ code, nonce, quantity, reason });
    console.log(`https://ajcoin.xyz/c/${code}`);
  } catch(err) {
    console.error(err);
    process.exit(1);
  } finally {
    await client.close();
  }
}
main();