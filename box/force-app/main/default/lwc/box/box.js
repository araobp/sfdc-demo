import { LightningElement } from 'lwc';

export default class Box extends LightningElement {
    value0 = 'false';
    value1 = 'false';
    value2 = 'false';

    get options() {
        return [
            { label: 'False', value: 'false' },
            { label: 'True', value: 'true' },
        ];
    }

    handleChange(event) {
        const label = event.target.label;
        const option = event.target.value;
        switch (label) {
            case 'Box0':
                console.log('Box0');
                console.log(option);
                //
                break;
            case 'Box1':
                console.log('Box1');
                console.log(option);
                //
                break;
            case 'Box2':
                console.log('Box2');
                console.log(option);
            //
                break;
            default:
                break;
        }
    }
}