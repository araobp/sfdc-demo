# "Box" unmanaged package on my dev edition

---

## "box" LWC and its accompanying Apex classes

```
  Frontend                       Backend
  [box LWC]----(Internet)----[BoxController]--[Box object]
```

#### LWC

- [box](./ThreeBoxes/Box/main/default/lwc/box)

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

## Apex classes for CLI as a connected app

```
  Frontend                 Backend
  [CLI]----(Internet)----[BoxManager/BoxStatus]--[Box object]
```

- [BoxManager](./ThreeBoxes/Box/main/default/classes/BoxManager.cls)
- [BoxStatus](./ThreeBoxes/Box/main/default/classes/BoxStatus.cls)
- [CLI](./connected_app/BOX_CONNECTED_APP.md)

---

## Apex callout to Heroku initiated by trigger

```
                                        Trigger
/box/{id__c}/count                      APEX code
    [Heroku] <---- REST PATCH ----- [Salesforce Cloud]

```

My Heroku dyno starts sleeping after the duration of 30 minutes inactivity. That is the reason why the callout script in this repo MUST be asynchronous: either @future(callout=true) or Queueable Apex.

#### Apex callout (asynchronous, @future(callout=true))

- [CalloutToHeroku](./ThreeBoxes/Box/main/default/classes/CalloutToHeroku.cls)

#### Apex trigger

- [BoxTrigger](./ThreeBoxes/Box/main/default/triggers/BoxTrigger.trigger)

--- 

## Permission sets for users of "Box" unmanaged package

- [Box](./ThreeBoxes/Box/main/default/permissionsets/Box.permissionset-meta.xml)
