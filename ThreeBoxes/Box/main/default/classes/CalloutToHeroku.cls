public with sharing class CalloutToHeroku {

    @future(callout=true)
    public static void incrementCounter(Decimal id) {
        BoxCounterApiService__c cred = getCred();
        HttpRequest request = new HttpRequest();
        request.setEndPoint(cred.Endpoint__c + 'box/' + id + '/count');
        request.setMethod('PATCH');
        Blob headerValue = Blob.valueOf(cred.Username__c + ':' + cred.Password__c);
        String authorizationHeader = 'Basic ' + EncodingUtil.base64Encode(headerValue);
        request.setHeader('Authorization', authorizationHeader);   
        HttpResponse response = new HTTP().send(request);
    }

    @future(callout=true)
    public static void resetCounter() {
        BoxCounterApiService__c cred = getCred();
        HttpRequest request = new HttpRequest();
        request.setEndPoint(cred.Endpoint__c + 'reset');
        request.setMethod('PATCH');
        Blob headerValue = Blob.valueOf(cred.Username__c + ':' + cred.Password__c);
        String authorizationHeader = 'Basic ' + EncodingUtil.base64Encode(headerValue);
        request.setHeader('Authorization', authorizationHeader);   
        HttpResponse response = new HTTP().send(request);
        
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        BoxCounterApiService__c boxCounterApiService = [SELECT Email__c FROM BoxCounterApiService__c WHERE Name = 'Heroku'];
        String[] toAddresses = new String[]{boxCounterApiService.Email__c};
        mail.setToAddresses(toAddresses);
		mail.setSubject('Box stats reset');
        Datetime today = Date.today();
		mail.setPlainTextBody('Box counters reset at ' + today);
        Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{mail});
    }

    public static BoxCounterApiService__c getCred() {
        return [SELECT EndPoint__c, Username__c, Password__c FROM BoxCounterApiService__c WHERE Name = 'Heroku'];
    }
}