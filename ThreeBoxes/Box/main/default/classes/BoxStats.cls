/* This code is made with help from JSON2Apex  */
public with sharing class BoxStats {

    @AuraEnabled
    public Integer id;

    @AuraEnabled
    public Integer count;

    public static List<BoxStats> parse(String json) {
            return (List<BoxStats>) System.JSON.deserialize(json, List<BoxStats>.class);
    }

}