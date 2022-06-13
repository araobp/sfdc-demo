# Salesforce & Heroku Integration demo

My original Salesforce & Heroku Integration demo.

## Architecture

<img src="doc/SalesforceAndHerokuIntegration.png" width=700>

## UIs

#### "Box" custom object in list view on Salesforce Cloud

<img src="./doc/BoxListView.png" width=900>

#### "Box" Lightning Web Components and APEX on Salesforce Cloud

<img src="./doc/BoxesOnLWC.png" width=400>

#### "Boxes" on React

<img src="./doc/BoxesOnReact.png" width=400>

#### "Boxes" on Unity

<img src="./doc/BoxesOnUnity.png" width=400>

## Box custom object definition on Salesforce Cloud

<img src="./doc/BoxObject.jpg" width=800>

## Projects

- [spring-api](https://github.com/araobp/spring-api) -- SpringBoot-based backend as API server with PostgreSQL
- [react-api](https://github.com/araobp/react-api) -- React-based fronend for manipulating database remotely
- [unity-api](https://github.com/araobp/unity-api) -- Unity-based frontend for 3D visualization
- ["Box" Lightning Web Component and its accompanying APEX code](box/force-app/main/default)

## Reference and tools

- [Salesforce & Heroku Integration](https://trailhead.salesforce.com/en/content/learn/modules/salesforce_heroku_integration)
- [APEX Integration Services](https://trailhead.salesforce.com/content/learn/modules/apex_integration_services)
- [JSON2APEX](https://json2apex.herokuapp.com/)
- [Lightning Web Components and Salesforce Data](https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-and-salesforce-data)
- [Forcecraft - Visualize your Salesforce Org in Minecraft!](https://youtu.be/eb3GgM1o_8I).

## Salesforce-SAP integration vendor

- [Vigience](https://www.vigience.com/)

## Salesforce tips

- [{"error":"invalid_grant","error_description":"authentication failure"}](https://salesforce.stackexchange.com/questions/339872/errorinvalid-grant-error-descriptionauthentication-failure)
- [View instance information for your Salesforce Organization](https://help.salesforce.com/s/articleView?id=000322728&type=1)

## cURL example to fetch a Case record from Salesforce Cloud

In case of this Trailhead module "[APEX Integration Services, APEX Web Services](https://trailhead.salesforce.com/content/learn/modules/apex_integration_services/apex_integration_webservices)",

```
[1] Obtain an access token:
curl -v https://login.salesforce.com/services/oauth2/token --header 'Content-Type: application/x-www-form-urlencoded' --data-urlencode "grant_type=password" --data-urlencode "client_id=<your_consumer_key>" --data-urlencode "client_secret=<your_consumer_secret>" --data-urlencode "username=<your_username>" --data-urlencode "password=<your_password_and_security_token>" -H "X-PrettyPrint:1"

[2] Include the acecss token in a REST request to fetch a Case record:
curl https://<your_instance>.my.salesforce.com/services/apexrest/Cases/<Record_ID> -H "Authorization: Bearer <your_session_id>" -H "X-PrettyPrint:1"
```
