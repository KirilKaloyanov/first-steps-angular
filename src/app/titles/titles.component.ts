import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'titles',
  template: `
    <input [(ngModel)]='title' />
    <br />
    <span>{{title | capitalize}}</span>
  `,
  styleUrls: []
})
export class TitlesComponent implements OnInit {

  title: string = 'something';

  ngOnInit(): void {
  }

}
