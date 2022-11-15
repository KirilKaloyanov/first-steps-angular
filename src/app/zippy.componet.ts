import { Component, Input } from '@angular/core';

@Component({
    selector: 'zippy',
    template: `
        <div> {{title}}</div>         
        <ng-content></ng-content>
    `
})


export class ZippyComponent {
@Input('title') title: string='nottitle';
}

