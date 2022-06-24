# "Box" unmanaged package on my dev edition

---

## "box" LWC and its accompanying Apex classes

```
  Frontend                       Backend
  [box LWC]----(Internet)----[BoxController]--[Box object]
```

#### LWC

- [box](./ThreeBoxes/Box/main/default/lwc/box) -- periodic polling to update box statuses
- [boxCDC](./ThreeBoxes/Box/main/default/lwc/boxCDC) -- pubsub over Kafka to update box statuses (subscription based on Comet long polling)

#### Apex

- [BoxController](./ThreeBoxes/Box/main/default/classes/BoxController.cls)

---

## "boxStats" LWC and its accompanying Apex classes

```
    Frontend                          Backend              "box_stats" table on PosrgreSQL
  [boxStats LWC]----(Internet)----[BoxStatsForLWC]----REST-----[Heroku]
                                               Synchronous callout
```

#### LWC

- [boxStats](./ThreeBoxes/Box/main/default/lwc/boxStats)

#### Apex

- [BoxStatsForLWC](./ThreeBoxes/Box/main/default/classes/BoxStatsForLWC.cls)
- [BoxStats](./ThreeBoxes/Box/main/default/classes/BoxStats.cls)

---

## Apex callout to Heroku initiated by trigger

```
                                        Trigger
/box/{id__c}/count                      APEX code
    [Heroku] <---- REST PATCH ----- [Salesforce Cloud]

                                        Scheduled job
/reset                                  APEX code
    [Heroku] <---- REST PATCH ----- [Salesforce Cloud]

```

My Heroku dyno starts sleeping after the duration of 30 minutes inactivity. That is the reason why the callout script in this repo MUST be asynchronous: either @future(callout=true) or Queueable Apex.

#### Apex callout (asynchronous/@future(callout=true) and scheduleable)

- [CalloutToHeroku](./ThreeBoxes/Box/main/default/classes/CalloutToHeroku.cls)

#### Apex trigger

- [BoxTrigger](./ThreeBoxes/Box/main/default/triggers/BoxTrigger.trigger)

#### Apex scheduled job

- [CalloutToHerokuScheduled](./ThreeBoxes/Box/main/default/classes/CalloutToHerokuScheduled.cls)

---

## Apex classes for CLI as a connected app

```
  Frontend                 Backend
  [CLI]----(Internet)----[BoxManager/BoxStatus]--[Box object]
```

- [BoxManager](./ThreeBoxes/Box/main/default/classes/BoxManager.cls)
- [BoxStatus](./ThreeBoxes/Box/main/default/classes/BoxStatus.cls)
- [CLI](./BOX_CONNECTED_APP.md)

--- 

## Permission sets for users of "Box" unmanaged package

- [Box](./ThreeBoxes/Box/main/default/permissionsets/Box.permissionset-meta.xml)

---

## Making use of EMP Connector (CometD-based)


#### References

- [Subsribe to an Event Channel](https://trailhead.salesforce.com/en/content/learn/modules/change-data-capture/subscribe-to-events)
- [EMP connector example](https://github.com/forcedotcom/EMP-Connector)

#### Try out

```
$ java -jar target/emp-connector-0.0.1-SNAPSHOT-phat.jar $DEV_EDITION_USERNAME $DEV_EDITION_PASSWORD$DEV_EDITION_SECURITY_TOKEN /data/Box__ChangeEvent

Subscribed: Subscription [/data/Box__ChangeEvent:-1]
Received:
{"schema":"bDnzY1EFkTYEKV0HYghVyg","payload":{"LastModifiedDate":"2022-06-23T15:21:44.000Z","Move__c":true,"ChangeEventHeader":{"commitNumber":286001238094,"commitUser":"0055i000003uX2eAAE","sequenceNumber":1,"entityName":"Box__c","changeType":"UPDATE","changedFields":["LastModifiedDate","Move__c"],"changeOrigin":"","transactionKey":"00026831-c8e1-13c6-e65f-c3b849d556ee","commitTimestamp":1655997704000,"recordIds":["a005i000004XJGIAA4"]}},"event":{"replayId":8407465}}
```
