import { Component, Input } from "@angular/core";

@Component({
    selector: 'like',
    template: `
        <button class="btn" [ngClass]="isSelected ? 'btn-danger' : 'btn-secondary'" (click)="toggle()"> Like </button>
        <span>{{likesCount}}</span>
    `

})
export class LikeComponent {
    @Input('isActive') isSelected: boolean = false;
    @Input('likesCount') likesCount: number = 0;

    toggle() {
        if (!this.isSelected ) this.likesCount++;
        else this.likesCount--;
        this.isSelected = !this.isSelected;
    }
}