// Credential data from environment variables
export const USERNAME = process.env.DEV_EDITION_USERNAME;
export const PASSWORD = process.env.DEV_EDITION_PASSWORD;
export const INSTANCE = process.env.DEV_EDITION_INSTANCE;
export const SECURITY_TOKEN = process.env.DEV_EDITION_SECURITY_TOKEN;
export const CONSUMER_KEY = process.env.DEV_EDITION_BOX_CONSUMER_KEY;
export const CONSUMER_SECRET = process.env.DEV_EDITION_BOX_CONSUMER_SECRET;

export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

//***  Fetch access token *******************************************/

// Salesforce OAuth2 API URL
const LOGIN_URL = 'https://login.salesforce.com/services/oauth2/token';

const headersTokenRequest = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
    'Accept': 'application/json'
};

const bodyTokenRequest = {
    'grant_type': 'password',
    'client_id': CONSUMER_KEY,
    'client_secret': CONSUMER_SECRET,
    'username': USERNAME,
    'password': `${PASSWORD}${SECURITY_TOKEN}`
};

const bodyUrlEncoded = new URLSearchParams(bodyTokenRequest);

export const fetchAccessToken = async () => { 
    const res = await fetch(LOGIN_URL, { method: POST, headers: headersTokenRequest, body: bodyUrlEncoded })
    if (res.status != 200) throw { success: false, reason: 'Failed to fetch access token!' };
    const data = await decode(res);
    return data['access_token'];
}

export const decode = async (res) => {
    const reader = res.body.getReader();
    const result = await reader.read();
    return JSON.parse(new TextDecoder("utf-8").decode(result.value));
}