import { Feed } from 'feed';
import api from './api.js';

export default async function feed(uri) {
  try {
    const res = await api.get(uri);
    console.log(res.data);
  } catch (err) {
    console.error(err);
  }
}
