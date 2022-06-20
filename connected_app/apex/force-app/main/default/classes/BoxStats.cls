public with sharing class BoxStats {
    public Double id__c;
    public Double count;

    public static List<BoxStats> parse(String json) {
            return (List<BoxStats>) System.JSON.deserialize(json, List<BoxStats>.class);
    }

}
