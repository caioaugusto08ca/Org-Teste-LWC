import { LightningElement, api } from 'lwc';

export default class EditContact extends LightningElement {

    @api recordId;

    handleContact(event){

        const inputFields = this.template.querySelectorAll('lightning-input-field');

        if(inputFields){

            inputFields.forEach(
                field => {
                    field.reset();
                }
            )
        }
    }
}