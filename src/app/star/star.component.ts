import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  template: `
  <!-- <button class='btn' [ngClass]='isActive ? "btn-danger" : "btn-warning"' (click)='toggle()'>Click me</button> -->
  <button 
    class='btn' 
    [class.btn-warning]='isClicked' 
    (click)='onClick()'
  >
    Click me
  </button>
`,
  styleUrls: []
})
export class StarComponent {
  // toggle() {this.isActive = !this.isActive;}
  // isActive = false;

  @Input('isActive') isClicked: boolean = false;
  @Output('change') click = new EventEmitter();

  onClick() {
    this.isClicked = !this.isClicked;
    this.click.emit(this.isClicked);
  }

}
