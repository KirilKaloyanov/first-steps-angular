// Examples for property binding

import { Component, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    template: `
        <h2>Zippy Component - example of property bindings</h2>
        <div> {{title}}</div> 
        <div [textContent]="subtitleField"></div>        
        <div [textContent]="'This is just a string bind to the textContent property in zippy.html'"></div>        
        <ng-content></ng-content>
    `
})


export class ZippyComponent {
@Input('title') title: string='blank'; //example of two-way binding
subtitleField: string = 'This subtitle is a class field in Zippy component bind to the textContent property of the DOM object "div".';
}

