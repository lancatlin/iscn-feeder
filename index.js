import express from 'express';
import iscnFeed from './feed.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  const feed = await iscnFeed('/iscn/records');
  console.log(feed);
  res.header('Content-Type', 'application/xml');
  res.status(200).send(feed);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
