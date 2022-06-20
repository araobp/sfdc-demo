public with sharing class BoxStatsForLWC {

    private Integer[] count;

    public BoxStatsForLWC() {
        this.count = new Integer[]{0, 0, 0};
    }

    //@future(callout=true)
    //@AuraEnabled(cacheable=false)
    public static void getStats(){
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
            List<BoxStats> l = BoxStats.parse(body);
            System.debug(l[0]);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
