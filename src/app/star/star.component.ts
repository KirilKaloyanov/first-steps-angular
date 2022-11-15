import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  template: `
    <h2>Star Component</h2>
    <div>Functionality:</div>
    <div>The button renders classes dynamically using property binding of the class DOM object property;</div>
    <div>The rendered class depends on the value of isClicked field of the star.ts class;</div>
    <div>This field is and @Input field with alias isActive used in the app.html;</div>
    <div>Through binding the field gets the value of the isClicked property of the post field in app.ts class;</div>
    <div>The button has onClick method which toggles the value of the isClicked field of the star.ts class;</div>
    <br>
    <button 
      class="btn" 
      [class.btn-warning]="isClicked" 
      [class.btn-secondary]="!isClicked" 
      (click)="onClick()"
    >
      Star
    </button>
    <br>
    <br>
    <div>The star.ts class has a press object which is an instance of EventEmitter class;</div>
    <div>This press object is @Output with 'change' alias used in app.html to bind to onChange method;</div>
    <div>This onChange method is declared in app.ts class and sets its value to the post.isClicked value;</div>
  `,
  styleUrls: [],
})
export class StarComponent {

  @Input('isActive') isClicked: boolean = false;
  @Output('change') press = new EventEmitter();

  onClick() {
    this.isClicked = !this.isClicked;
    this.press.emit(this.isClicked);
  }
}
