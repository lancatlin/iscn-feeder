import { Feed } from 'feed';
import api from './api.js';

export default async function iscnFeed(uri) {
  try {
    const res = await api.get(uri, {
      params: {
        reverse: true,
      },
    });
    const feed = new Feed({
      title: 'ISCN Feed',
      id: 'http://likecoin.github.io/iscn-browser',
      link: 'http://likecoin.github.io/iscn-browser',
      updated: new Date(),
      generator: 'ISCN Feed',
    });
    res.data.records.forEach(({ data }) => {
      console.log(data);
      const {
        '@id': iscnId,
        contentMetadata: {
          name,
          url,
          description,
        },
        recordTimestamp,
      } = data;
      feed.addItem({
        title: name,
        id: iscnId,
        link: url,
        description,
        content: description,
        date: new Date(recordTimestamp),
      });
    });
    return feed.rss2();
  } catch (err) {
    console.error(err);
    throw err;
  }
}
