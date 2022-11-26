import { Component } from "@angular/core";

@Component({
    selector: 'click-component',
    templateUrl: './click.component.html'
})
export class ClickComponent {
    logInput(myInput: any){
        console.log(myInput.value);
        myInput.value = '';
    }
}