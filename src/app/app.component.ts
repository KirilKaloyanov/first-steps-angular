import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  // Like Component
  tweet = {
    isLiked: true,
    likesCount: 10
  }
  
  // Star component
  post = {
    title: 'Post',
    isClicked: false
  }

  onChange(isChanged: boolean) {
    this.post.isClicked = isChanged;
    console.log('Change occurred!', this.post.isClicked);
  }

}
