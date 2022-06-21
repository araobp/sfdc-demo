# "Box" unmanaged package on my dev edition

---

## "box" LWC and its accompanying Apex classes

#### LWC

- [box](./ThreeBoxes/Box/main/default/lwc/box)

#### Apex

- [BoxController](./ThreeBoxes/Box/main/default/classes/BoxController.cls)

---

## "boxStats" LWC and its accompanying Apex classes

#### LWC

- [boxStats](./ThreeBoxes/Box/main/default/lwc/boxStats)

#### Apex

- [BoxStatsForLWC](./ThreeBoxes/Box/main/default/classes/BoxStatsForLWC.cls)
- [BoxStats](./ThreeBoxes/Box/main/default/classes/BoxStats.cls)

---

## Apex classes for CLI as a connected app

- [BoxManager](./ThreeBoxes/Box/main/default/classes/BoxManager.cls)
- [BoxStatus](./ThreeBoxes/Box/main/default/classes/BoxStatus.cls)

## Apex trigger to Heroku

---

#### Apex callout (asynchronous, @future(callout=true))

- [CalloutToHeroku](./ThreeBoxes/Box/main/default/classes/CalloutToHeroku.cls)

#### Apex trigger

- [BoxTrigger](./ThreeBoxes/Box/main/default/triggers/BoxTrigger.trigger)

--- 

## Permission sets for users of "Box" unmanaged package

- [Box](./ThreeBoxes/Box/main/default/permissionsets/Box.permissionset-meta.xml)
