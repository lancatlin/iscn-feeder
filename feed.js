import { Feed } from 'feed';

export default async function iscnFeed(records, title) {
  const feed = new Feed({
    title,
    id: 'https://iscn-feeder.wancat.cc',
    link: 'https://iscn-feeder.wancat.cc',
    updated: new Date(records[0].data.recordTimestamp),
    generator: 'ISCN Feeder',
  });
  records.forEach(({ data }) => {
    const {
      '@id': iscnId,
      contentMetadata: {
        name,
        url,
        description,
      },
      stakeholders,
      recordTimestamp,
    } = data;
    feed.addItem({
      title: name,
      id: iscnId,
      link: url,
      description,
      content: description,
      date: new Date(recordTimestamp),
      contributor: stakeholders.map(({ entity }) => ({
        name: entity.name,
        link: `https://likecoin.github.io/iscn-browser/stakeholder/${entity.name}`,
      })),
    });
  });
  return feed.atom1();
}
