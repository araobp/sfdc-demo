import { LightningElement } from 'lwc';
//import getStats from '@salesforce/apex/BoxStatsForLWC.getStats';

const INTERVAL = 5000; // 5sec

export default class BoxStats extends LightningElement {

    timer = null;

    updateStats = () => {
        /*
        getStats()
            .then(stats => {
                console.log(stats);
            });
            */
    }

    connectedCallback() {
        this.timer = setInterval(() => {
            this.updateStats();
        }, INTERVAL);
    }
    disconnectedCallback() {
        clearInterval(this.timer);
    }

}