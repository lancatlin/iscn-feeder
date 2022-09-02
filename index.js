import express from 'express';
import iscnFeed from './feed.js';
import api from './api.js';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await api.get('/iscn/records', {
      params: {
        reverse: true,
        ...req.query,
      },
    });
    const feed = await iscnFeed(response.data.records);
    res.header('Content-Type', 'application/xml');
    res.status(200).send(feed);
  } catch (err) {
    console.error(err);
    res.status(500).send('ERROR');
  }
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
