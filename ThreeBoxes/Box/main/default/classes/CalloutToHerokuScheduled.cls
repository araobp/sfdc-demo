public with sharing class CalloutToHerokuScheduled implements Schedulable {
	    
    public void execute(SchedulableContext ctx) {
        CalloutToHeroku.resetCounter();
    }
    
}