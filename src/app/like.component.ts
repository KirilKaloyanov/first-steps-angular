import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  template: `
    <h2>Like component</h2>
    <div>Functionality: </div>
    <div>The button uses ngClass binding which dynamically renders different skins;</div>
    <div>The skin of the button depends on the isSelected field in like.ts;</div>
    <div>This isSelected field is an @Input field with alias name isActive to be used in app.html;</div>
    <div>In app.html isActive is bound to the value of the isLiked field in the tweet object in app.ts;</div>
    <button
      class="btn"
      [ngClass]="isSelected ? 'btn-danger' : 'btn-secondary'"
      (click)="toggle()"
    >
      Like
    </button>
    <div>The span shows the value of likesCount field in like.ts'</div>
    <div>This span is and @Input field with alias name likesCount used in the app.html;</div>
    <div>In app.html likesCount is bound to the value of the likesCount property of the tweet object in app.ts</div>
    <br>
    <span>{{ likesCount }}</span>
    <br>
    <br>
    <div>The button has a click event listener which triggers the toggle method of the like.ts</div>
    <div>This toggle method increments the likesCount field if isSelected is true.</div>
    <div>Remeber that both likesCount and isSelected values is comming from app.ts</div>
    <div>
  `,
})
export class LikeComponent {
  @Input('isActive') isSelected: boolean = false;
  @Input('likesCount') likesCount: number = 0;

  toggle() {
    if (!this.isSelected) this.likesCount++;
    else this.likesCount--;
    this.isSelected = !this.isSelected;
  }
}
