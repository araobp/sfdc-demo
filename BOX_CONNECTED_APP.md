# "Box" connected app

I have set up a connected app "Box" on my Salesforce devlopment edition.

## CLI

[cli](./cli) folder has CLIs to manipulate "Box" object remotely from a console.

[cli2](./cli2) folder has CLIs that use Salesforce standard REST APIs.

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

#### CLI/shell

- [Get Access Token](./cli/shell/get_access_token.sh)
- [Get Box by Id](./cli/shell/get_box_by_id.sh)

#### CLI/JavaScript

- [Get Access Token](./cli/javascript/getAccessToken.js)
- [Get Box statuses](./cli/javascript/getBoxStatus.js)
- [Get Box by Id](./cli/javascript/getBoxByid.js)
- [Patch Box status by Id](./cli/javascript/patchBoxById.js)

#### CLI2/JavaScript

- [list organization limits](./cli2/listOrganizationLimits.js)
- [get Box statuses (with SOQL query)](./cli2/listBoxes.js)
