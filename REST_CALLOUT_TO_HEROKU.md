# APEX REST Callout to Heroku initiated by trigger


```
                                        Trigger
/box/{id__c}/count                      APEX code
    [Heroku] <---- REST PATCH ----- [Salesforce Cloud]

```

My Heroku dyno starts sleeping after the duration of 30 minutes inactivity. That is the reason why the callout script in this repo MUST be asynchronous: either @future(callout=true) or Queueable Apex.
