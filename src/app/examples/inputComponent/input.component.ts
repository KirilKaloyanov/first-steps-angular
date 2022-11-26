import { Component } from "@angular/core";

@Component({
    selector: 'input-component',
    templateUrl: './input.component.html'
})
export class InputComponent {
    text:any = '';
    logInput() {
        console.log(this.text.value);
        this.text = this.text.value; //if set to an empty string will not clear the field
    }

    field = '';
    logField() {
        console.log(this.field);
        this.field = '';
    }
}