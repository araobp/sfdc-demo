import { fetchAccessToken } from './boxApi.js';

const test = async () => {
  const accessToken = await fetchAccessToken();
  console.log(accessToken);
}

test();

