public with sharing class BoxController {
    @AuraEnabled(cacheable=false)
    public static List<Box__c> getBoxes() {
        List<Box__c> boxes = [SELECT Id, Id__c, Name, Move__c FROM Box__c];
        //for (Box__c b : boxes) {
        //    System.debug(b.Name);
        //}
        return boxes;
    }

    @AuraEnabled(cacheable=false)
    public static void moveBox(Integer id, Boolean move){
        Box__c box = [SELECT Id, Id__c, Name, Move__c FROM Box__c WHERE Id__c = :id];
        box.Move__c = move;
        update box;
    }
}