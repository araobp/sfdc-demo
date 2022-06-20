import { LightningElement } from 'lwc';
import getStatsFromHeroku from '@salesforce/apex/BoxStatsForLWC.getStatsFromHeroku';

export default class BoxStats extends LightningElement {
    count0;
    count1;
    count2;

    handleClick = (event) => {
        getStatsFromHeroku()
            .then(stats => {
                console.log(stats);
                stats.forEach(s => {
                    switch (s.id) {
                        case 0:
                            this.count0 = s.count;
                            break;
                        case 1:
                            this.count1 = s.count;
                            break;
                        case 2:
                            this.count2 = s.count;
                            break;
                        default:
                            break;
                    }
                });
            });
    }

}