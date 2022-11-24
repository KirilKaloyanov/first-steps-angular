import { Component } from "@angular/core";

@Component({
    selector: 'switch-case',
    template: `
        <h2>Switch case Component</h2>
        <ul class="nav nav-pills">
            <li class="nav-item"><a class="nav-link" [class.active]='viewMode == "map"' (click)='viewMode = "map"'>Map view</a></li>
            <li class="nav-item"><a class="nav-link" [class.active]='viewMode == "list"'  (click)='viewMode = "list"'>List view</a></li>
        </ul>
        <div [ngSwitch]='viewMode'>
            <div *ngSwitchCase="'map'">Map view Content</div>
            <div *ngSwitchCase="'list'">List view Content</div>
            <div *ngSwitchDefault="">Otherwise</div>
        </div>
    `
})
export class SwitchCaseComponent{
    viewMode = 'sth';
}