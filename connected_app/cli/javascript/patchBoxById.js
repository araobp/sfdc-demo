#!/usr/bin/env node

import { fetchAccessToken, decode, INSTANCE, PATCH } from './boxApi.js';

const boxId = process.argv.slice(2)[0];
const move = (process.argv.slice(2)[1] === 'true');

console.log(move);

const BOX_API_SERVICE_URL = `https://${INSTANCE}.my.salesforce.com/services/apexrest/Box/`

const test = async () => {
  const accessToken = await fetchAccessToken();
  const headersBoxApi = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  };  

  const body = {
    'Move__c': move 
  }

  const res = await fetch(BOX_API_SERVICE_URL + boxId, { method: PATCH, headers: headersBoxApi, body: JSON.stringify(body) })
  const data = await decode(res);
  console.log(data);
}

test();

