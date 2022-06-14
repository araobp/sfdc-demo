#!/usr/bin/env node

import { fetchAccessToken, decode, INSTANCE, GET } from './boxApi.js';

const boxId = process.argv.slice(2)[0];

const BOX_API_SERVICE_URL = `https://${INSTANCE}.my.salesforce.com/services/apexrest/Box/`

const test = async () => {
  const accessToken = await fetchAccessToken();
  const headersBoxApi = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  };  

  const res = await fetch(BOX_API_SERVICE_URL + boxId, { method: GET, headers: headersBoxApi })
  const data = await decode(res);
  console.log(data);
}

test();

