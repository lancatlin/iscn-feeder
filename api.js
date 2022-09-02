import axios from 'axios';
import qs from 'qs';

const app = axios.create({
  baseURL: 'https://mainnet-node.like.co',
  paramsSerializer: (params) => qs.stringify(
    params,
    { arrayFormat: 'repeat' },
  ),
  timeout: 60000,
});

export default app;
