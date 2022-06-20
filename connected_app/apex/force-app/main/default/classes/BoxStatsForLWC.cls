public with sharing class BoxStatsForLWC {

    @AuraEnabled(cacheable=false)
    public static List<BoxStats> getStatsFromHeroku(){
        try {
            BoxCounterApiService__c cred = CalloutToHeroku.getCred();
            HttpRequest request = new HttpRequest();
            request.setEndPoint(cred.Endpoint__c + 'stats');
            request.setMethod('GET');
            Blob headerValue = Blob.valueOf(cred.Username__c + ':' + cred.Password__c);
            String authorizationHeader = 'Basic ' + EncodingUtil.base64Encode(headerValue);
            request.setHeader('Authorization', authorizationHeader);  
            request.setHeader('Accept', 'application/json'); 
            HttpResponse response = new HTTP().send(request);
            String body = response.getBody();
            List<BoxStats> statsList = BoxStats.parse(body);
            System.debug(statsList);
            return statsList;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
