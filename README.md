# SFDC demo apps

## Skeleton for Salesforce & Heroku Integration demo

This is going to be a "Forceunity - Visualize your Salesforce Org in Unity!" like [this youtube video](https://youtu.be/eb3GgM1o_8I).

Reference: [Salesforce & Heroku Integration](https://trailhead.salesforce.com/en/content/learn/modules/salesforce_heroku_integration)

### "Box" custom object on Salesforce Cloud

<img src="./doc/BoxListView.png" width=900>

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

## LWC & APEX demo

- [lwc-samples](https://github.com/araobp/lwc-samples)

