# "Box" connected app

I have set up a connected app "Box" on my Salesforce devlopment edition.

## CLI

[cli](./cli) folder has CLIs to manipulate "Box" object remotely from a console.

Requirements:
- Shell
- Node.js 18

#### Environment variables for Salesforce connected app "Box"

```
DEV_EDITION_USERNAME;
DEV_EDITION_PASSWORD;
DEV_EDITION_INSTANCE;
DEV_EDITION_SECURITY_TOKEN;
DEV_EDITION_BOX_CONSUMER_KEY;
DEV_EDITION_BOX_CONSUMER_SECRET;
```

#### Fetch an access token from the Saleforce connected app

- [shell](./fetch_access_token.sh)
- [javascrip](./fetch_access_token.js)
