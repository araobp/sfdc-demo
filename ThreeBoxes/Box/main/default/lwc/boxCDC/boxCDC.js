import { LightningElement } from 'lwc';
import getBoxes from '@salesforce/apex/BoxController.getBoxes';
import moveBox from '@salesforce/apex/BoxController.moveBox';
import { subscribe, unsubscribe } from 'lightning/empApi';

export default class BoxCDC extends LightningElement {
  boxes;  // in-memory Box__c object on browser

  channelName = '/data/Box__ChangeEvent';  // CDC event

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

  connectedCallback() {
    this.handleSubscribe();
  }
  disconnectedCallback() {
    this.handleUnsubscribe();
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

  setValue = (box) => {
    console.log(box);
    switch (box.Id__c) {
      case 0:
        this.value0 = box.Move__c.toString();
        break;
      case 1:
        this.value1 = box.Move__c.toString();
        break;
      case 2:
        this.value2 = box.Move__c.toString();
        break;
      default:
        break;
    }
  }

  handleSubscribe = () => {
    getBoxes()
      .then(boxes => {
        this.boxes = boxes;
        boxes.forEach(b => { this.setValue(b) });

        this.handleSubscribe_();
      })
  }

  handleSubscribe_() {
    const messageCallback = (response) => {
      // console.log('New message received: ', JSON.stringify(response));
      const move = response.data.payload.Move__c;
      const recordId = response.data.payload.ChangeEventHeader.recordIds[0];
      this.boxes.forEach(b => {
        console.log(`Comparison: ${b.Id} ${move}, ${recordId}`);
        if (b.Id === recordId) {
          b.Move__c = move;
          this.setValue(b);
        }
      });
    };

    subscribe(this.channelName, -1, messageCallback).then((response) => {
      console.log('Subscription request sent to: ', JSON.stringify(response.channel));
      this.subscription = response;
    });
  }

  handleUnsubscribe() {
    unsubscribe(this.subscription, (response) => {
      console.log('unsubscribe() response: ', JSON.stringify(response));
    });
  }
}