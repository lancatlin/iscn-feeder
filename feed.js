import { Feed } from 'feed';

export default async function iscnFeed(records) {
  const feed = new Feed({
    title: 'ISCN Feed',
    id: 'http://likecoin.github.io/iscn-browser',
    link: 'http://likecoin.github.io/iscn-browser',
    updated: new Date(),
    generator: 'ISCN Feed',
  });
  records.forEach(({ data }) => {
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
}
