import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    @Inject('Test') test: string
  ) {
    console.log(test);
  }
  // Solid Component
  users = [
    {
      name: 'Iveta',
    },
    {
      name: 'Kiril',
    },
  ];

  addUserHandler(nameInput: HTMLInputElement): void {
    const { value: name } = nameInput;
    this.users.push({ name });
    nameInput.value = '';
  }

  // Like Component
  tweet = {
    isLiked: true,
    likesCount: 10,
  };

  // Star component
  post = {
    title: 'Post',
    isClicked: false,
  };

  onChange(isChanged: boolean) {
    this.post.isClicked = isChanged;
    console.log('Change occurred!', this.post.isClicked);
  }

  touch = false;

  onAppTouch() {
    this.touch = !this.touch;
    console.log('Touched', this.touch);
  }
}
