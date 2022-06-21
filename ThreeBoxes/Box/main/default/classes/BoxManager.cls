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
    global static Map<String, Boolean> PatchBoxById() {
        Map<String, Boolean> success = new Map<String, Boolean>();
        success.put('success', false);
        RestRequest request = RestContext.request;
        String boxIdStr = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
        Decimal boxId = Decimal.valueOf(boxIdStr);
        
        Box__c thisBox = [SELECT Id__c, Name, Move__c FROM Box__c WHERE Id__c = :boxId];
        
        Map<String, Object> params = (Map<String, Object>)JSON.deserializeUntyped(request.requestbody.tostring());
        System.debug(params);
        Boolean move = (Boolean)(params.get('Move__c'));
        if (move != null) {
            thisBox.Move__c = move;
            update thisBox;
            success.put('success', true);
            success.put('Move__c', move);
        }
        return success;
    }
}