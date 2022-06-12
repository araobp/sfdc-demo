# SFDC(Salesforce dot com) integration demo

## Skeleton for Salesforce & Heroku Integration

This is "Forceunity - Visualize your Salesforce Org in Unity!" like [this youtube video](https://youtu.be/eb3GgM1o_8I).

### "Box" custom object in list view on Salesforce Cloud

<img src="./doc/BoxListView.png" width=900>

### "Box" Lightning Web Components and APEX on Salesforce Cloud

<img src="./doc/BoxesOnLWC.png" width=450>

### "Boxes" on React

<img src="./doc/BoxesOnReact.png" width=400>

### "Boxes" on Unity

<img src="./doc/BoxesOnUnity.png" width=400>

### Demo system architecture

```
                                 "box__c" table  <- - - - in sync - - ->  "Box" object
    [react-api]---REST API---[spring-api on Heroku]---Heroku connect---[Salesforce Cloud]
                                       |
                                   REST API
                                       |
                                  [unity-api]
```

### Projects

- [spring-api](https://github.com/araobp/spring-api) -- SpringBoot-based backend as API server with PostgreSQL
- [react-api](https://github.com/araobp/react-api) -- React-based fronend for manipulating database remotely
- [unity-api](https://github.com/araobp/unity-api) -- Unity-based frontend for 3D visualization
- ["Box" Lightning Web Component and its accompanying APEX code](box/force-app/main/default)

## Reference and tools

- [Salesforce & Heroku Integration](https://trailhead.salesforce.com/en/content/learn/modules/salesforce_heroku_integration)
- [APEX Integration Services](https://trailhead.salesforce.com/content/learn/modules/apex_integration_services)
- [JSON2APEX](https://json2apex.herokuapp.com/)
- [Lightning Web Components and Salesforce Data](https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-and-salesforce-data)
