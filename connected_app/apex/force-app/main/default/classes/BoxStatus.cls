@RestResource(urlMapping='/Box')
global with sharing class BoxStatus {
    @HttpGet
    global static List<Box__c> GetBoxStatus() {
        return [SELECT Id__c, Name, Move__c FROM Box__c];
    }
}
