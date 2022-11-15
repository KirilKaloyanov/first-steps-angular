import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  post = {
    title: 'Post',
    isClicked: false
  }

  onChange(isChanged: boolean) {
    console.log('Change occurred!', isChanged);
  }

  tweet = {
    isLiked: true,
    likesCount: 10
  }
}
