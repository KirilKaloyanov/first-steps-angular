import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  template: `
    <h2>Star Component</h2>
    <div>Functionality:</div>
    <div>The button renders classes dynamically using property binding of the class DOM object property;</div>
    <div>The rendered class depends on the value of isClicked field of the star.ts class;</div>
    <div>This field is an @Input field with alias isActive used in the app.html;</div>
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
    <div>When the onClick method is triggered it not only changes this.isClicked field of the star.ts class,</div>
    <div>but it also emits the value of the this.isClicked field of the star.ts class through the press object;</div>
    <div>This object passes the value to the onChange method in app.ts as an arguement;</div>
    <div>The onChange method sets this value as a new value to the isClicked field of the post object;</div>
    <div>This method also console.logs the new value of the isClicked field of the post object;</div>
    <div>This new value is again passed through binding to the isClicked field of the star.ts class.</div>
    <button class="btn btn-success" (click)="onTouch()">Touch</button>
    <div> The touch button also has an @Output touch object emmitter bound to an onAppTouch method in app.ts</div>
    <div> When touch is clicked it triggers onTouch method in star.ts and the touch emmitter triggers onAppTouch method in app.ts</div>
    <div> This method toggles the touch property in app.ts and logs its value on the console.</div>
  `,
  styleUrls: [],
})
export class StarComponent {

  @Input('isActive') isClicked: boolean = true;
  @Output('change') press = new EventEmitter();

  onClick() {
    this.isClicked = !this.isClicked;
    this.press.emit(this.isClicked);
  }

  @Output('touch') touch = new EventEmitter();

  onTouch() {
    this.touch.emit();
  }
}
