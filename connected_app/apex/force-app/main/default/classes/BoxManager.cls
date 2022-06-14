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

    @HttpPatch
    global static Boolean PatchBoxById() {
        Boolean success = false;
        RestRequest request = RestContext.request;
        String boxIdStr = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
        Decimal boxId = Decimal.valueOf(boxIdStr);
        
        Box__c thisBox = [SELECT Id__c, Name, Move__c FROM Box__c WHERE Id__c = :boxId];
        
        Map<String, Object> params = (Map<String, Object>)JSON.deserializeUntyped(request.requestbody.tostring());
        Boolean move = (Boolean)params.get('Move__c');
        if (move != null) {
            thisBox.Move__c = move;
            update thisBox;
            success = true;
        }
        return success;
    }
}
