import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <div> *ngFor directive loops through an array.</div>
        <div> *ngIf renders an element based on a condition.</div>
        <ul *ngIf="courses.length > 0">
            <li *ngFor="let course of courses; trackBy: trackCourse">{{course.name}}</li>
        </ul>
        <div *ngIf='courses.length <=0'> no courses yet </div>
        <div>The click button triggers onClick method which logs the event on the console.</div>
        <button (click)='onClick($event)' class="btn btn-primary m-2">Click</button>
        <br/>
        <div> A template variable is declared by adding #varName as a property in the html tag.</div>
        <input #myName (keyup.enter)="onSave(myName)"/>
        <br/>
        <br/>
        <div> One-way property binding </div>
        <div>The value of the input comes from the property in the class, but when the value of the</div>
        <div>input is changed and enter is pressed the handler still logs the same value in the console.</div>
        <div>Alternatively, if we set (keyup.enter)="surname = $event.target.value; onSurname()" </div>
        <div>this will work as two-way binding.</div>
        <input [value]="surname" (keyup.enter)="onSurname()" />
        <br/>
        <br/>
        <div> Banana in a box [()]</div>
        <div> ngModel is a directive for implementing two-way binding. </div>
        <div> Inititally the email property is empty string, but when a value is type </div>
        <div> and enter is pressed the value gets updated and the new value is logged in the console.</div>
        <div> ngModel is part of the FormsModule, which must be imported from @angular/forms</div>
        <div> ilbrary and declared in the imports array in app.module.</div>
        <input [(ngModel)]="email" (keyup.enter)="onKeyEnter()"/>
        <br/>
        <br/>
        <h2>Custom Pipes</h2>
        <div>To create custom pipe first create a ts file and import Pipe decorator and </div>
        <div>PipeTransform interface. Check the definition of this interface at angular.io</div>
        <div> Then the .ts must be included in the app.module declarations.</div>
        {{text | summary: 10}}
        `
})
export class CoursesComponent {
    title = 'Courses Component';
    courses: any[];
    surname = 'empty';
    email = '';


    onClick($event: any) {
        console.log('clicked', $event);
    }

    onSave(myName: any) {
        console.log(myName.value);
    }

    onSurname() {
        console.log(this.surname);
    }

    onKeyEnter() {
        console.log(this.email);
    }

    text = '[webpack-dev-server] Server started: Hot Module Replacement disabled, Live Reloading enabled, Progress disabled, Overlay enabled. Angular is running in development mode. Call enableProdMode() to enable production mode.'

    trackCourse(index: number, course: any) {
        return course ? course.id : undefined;
    }
    constructor(service: CoursesService) {
        this.courses = service.getCourses();
        // this.courses = []; 
    }
}
