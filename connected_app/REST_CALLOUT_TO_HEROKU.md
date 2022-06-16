# APEX REST Callout to Heroku initiated by trigger


```
                                        Trigger
/box/{id__c}/count                      APEX code
    [Heroku] <---- REST PATCH ----- [Salesforce Cloud]

```

## APEX code

- [Trigger](https://github.com/araobp/sfdc-demo/blob/main/connected_app/apex/force-app/main/default/triggers/BoxTrigger.trigger)
- [Callout](https://github.com/araobp/sfdc-demo/blob/main/connected_app/apex/force-app/main/default/classes/CalloutToHeroku.cls)
