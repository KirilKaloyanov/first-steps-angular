import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star',
  template: `
  <button class='btn' [ngClass]='isActive ? "btn-danger" : "btn-warning"' (click)='toggle()'>Click me</button>
  <button class='btn' [class.btn-primary]='!isClicked' [class.btn-secondary]='isClicked' (click)='onClick()'>Click me</button>
`,
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  toggle() {
    this.isActive = !this.isActive;
  }

  isActive = false;

  onClick() {
    this.isClicked = !this.isClicked
  }

  isClicked: boolean = false;

  ngOnInit(): void {
  }

}
