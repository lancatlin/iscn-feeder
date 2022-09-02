import axios from 'axios';
import qs from 'qs';

export default axios.create({
  baseURL: 'https://mainnet-node.like.co',
  paramsSerializer: (params) => qs.stringify(
    params,
    { arrayFormat: 'repeat' },
  ),
  timeout: 60000,
});
