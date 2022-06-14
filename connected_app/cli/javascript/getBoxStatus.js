#!/usr/bin/env node

import { fetchAccessToken, decode, INSTANCE, GET } from './boxApi.js';

const BOX_API_SERVICE_URL = `https://${INSTANCE}.my.salesforce.com/services/apexrest/Box`

const test = async () => {
  const accessToken = await fetchAccessToken();
  const headersBoxApi = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  };  

  const res = await fetch(BOX_API_SERVICE_URL, { method: GET, headers: headersBoxApi })
  const data = await decode(res);
  console.log(data);
}

test();

