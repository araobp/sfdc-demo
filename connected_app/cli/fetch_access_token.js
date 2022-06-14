#!/usr/bin/env node

// Credential data from environment variables
const USERNAME = process.env.DEV_EDITION_USERNAME;
const PASSWORD = process.env.DEV_EDITION_PASSWORD;
const INSTANCE = process.env.DEV_EDITION_INSTANCE;
const SECURITY_TOKEN = process.env.DEV_EDITION_SECURITY_TOKEN;
const CONSUMER_KEY = process.env.DEV_EDITION_BOX_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.DEV_EDITION_BOX_CONSUMER_SECRET;

/*
console.log(USERNAME);
console.log(PASSWORD);
console.log(INSTANCE);
console.log(SECURITY_TOKEN);
console.log(CONSUMER_KEY);
console.log(CONSUMER_SECRET);
*/

// Salesforce OAuth2 API URL
const LOGIN_URL = 'https://login.salesforce.com/services/oauth2/token';

const headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json'
};

const body = {
    'grant_type': 'password',
    'client_id': CONSUMER_KEY,
    'client_secret': CONSUMER_SECRET,
    'username': USERNAME,
    'password': `${PASSWORD}${SECURITY_TOKEN}`
};

const bodyUrlEncoded = new URLSearchParams(body);

fetch(LOGIN_URL, { method: 'POST', headers: headers, body: bodyUrlEncoded })
.then(res => {
        //console.log(res.body);
        const reader = res.body.getReader();
        reader.read()
        .then(result => {
            var data = JSON.parse(
                new TextDecoder("utf-8").decode(result.value)
              );
            console.log(data);
        })
    }
);
