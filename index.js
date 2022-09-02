import express from 'express';
import feed from './feed.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  await feed('/iscn/records');
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
