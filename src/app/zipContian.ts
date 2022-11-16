import { Component } from "@angular/core";

@Component({
    selector: 'zippy-container',
    template: `
        <h2>Multiple ng-content</h2>
        <ng-content select=".heading"></ng-content>
        <br>
        <ng-content select=".body"></ng-content>

    `
})
export class ZippyContainerComponent {

}