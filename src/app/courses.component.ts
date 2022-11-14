import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">{{course}}</li>
        </ul>

        <button (click)='onSave($event)' class="btn btn-primary m-2">Save</button>
        <br/>
        <input [(ngModel)]="email" (keyup.enter)="onKeyEnter()"/>
        <br/>

        {{text | summary: 10}}
        `
})
export class CoursesComponent {
    title = 'List of courses';
    courses;
    email = 'email.com';

    onSave($event: any) {
        console.log('clicked', $event);
    }

    onKeyEnter() {
        console.log(this.email);
    }

    text = '[webpack-dev-server] Server started: Hot Module Replacement disabled, Live Reloading enabled, Progress disabled, Overlay enabled. Angular is running in development mode. Call enableProdMode() to enable production mode.'

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }
}
