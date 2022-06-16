#!/usr/bin/env node

import { fetchAccessToken, decode, INSTANCE, GET } from './boxApi.js';

const URL = `https://${INSTANCE}.salesforce.com/services/data/v48.0/query/?q=SELECT+Id__c,Name,Move__c+FROM+Box__c`;

console.log(URL);

const test = async () => {
  const accessToken = await fetchAccessToken();
  const headersBoxApi = {
    'Authorization': `Bearer ${accessToken}`,
    'Accept': 'application/json'
  };  

  const res = await fetch(URL, { method: GET, headers: headersBoxApi })
  const data = await decode(res);
  console.log(data);
}

test();

