trigger BoxTrigger on Box__c (after update) {
    for (Box__c newBox : Trigger.New) {
        Box__c oldBox = Trigger.oldMap.get(newBox.id);
        if (newBox.move__c != oldBox.move__c) {
            System.debug(newBox.id__c + ':' + oldBox.move__c + ':' + newBox.move__c);
        }
        CalloutToHeroku.incrementCounter(newBox.id__c);
    }
}