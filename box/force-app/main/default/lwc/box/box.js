import { LightningElement } from 'lwc';
import getBoxes from '@salesforce/apex/BoxController.getBoxes';
import moveBox from '@salesforce/apex/BoxController.moveBox';

const INTERVAL = 2000; // 2sec

export default class Box extends LightningElement {
    timer;
    boxes;

    value0 = 'false';
    value1 = 'false';
    value2 = 'false';

    MOVE_BOX0 = "Move box0";
    MOVE_BOX1 = "Move box1";
    MOVE_BOX2 = "Move box2";

    get options() {
        return [
            { label: 'False', value: 'false' },
            { label: 'True', value: 'true' },
        ];
    }

    handleChange(event) {
        console.log("handleChange called")
        const label = event.target.label;
        const option = event.target.value;
        const move = (option === 'true');
        switch (label) {
            case this.MOVE_BOX0:
                console.log('Box0');
                console.log(option);
                moveBox({ id: 0, move: move });
                break;
            case this.MOVE_BOX1:
                console.log('Box1');
                console.log(option);
                moveBox({ id: 1, move: move });
                break;
            case this.MOVE_BOX2:
                console.log('Box2');
                console.log(option);
                moveBox({ id: 2, move: move });
                break;
            default:
                break;
        }
    }

    updateBoxes = () => {
        getBoxes()
            .then(boxes => {
                this.boxes = boxes;
                // console.log(boxes);
                boxes.forEach(b => {
                    switch (b.Id__c) {
                        case 0:
                            this.value0 = b.Move__c.toString();
                            break;
                        case 1:
                            this.value1 = b.Move__c.toString();
                            break;
                        case 2:
                            this.value2 = b.Move__c.toString();
                            break;
                        default:
                            break;
                    }
                });

            })
    }

    connectedCallback() {
        this.timer = setInterval(() => {
            this.updateBoxes();
        }, INTERVAL);
    }
    disconnectedCallback() {
        clearInterval(this.timer);
    }
}