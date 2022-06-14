@RestResource(urlMapping='/Box/*')
global with sharing class BoxManager {
    @HttpGet
    global static Box__c GetBoxById() {
        RestRequest request = RestContext.request;

        String boxIdStr = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
        Decimal boxId = Decimal.valueOf(boxIdStr);
        Box__c box = [SELECT Id__c, Name, Move__c FROM Box__c WHERE Id__c = :boxId];
        return box;
    }
}
