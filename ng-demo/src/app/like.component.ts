import { Component, EventEmitter, Output, NgModule } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-like',
  template: `
    <button
      style="background-color: #ddd; color: #333; font-weight: bold; border-radius: 5%;" 
      (click)="incrementLike()"
    >
      &#9989; | <span>{{ numLikes }}</span>
    </button>
    <button
      style="background-color: #ddd; color: #333; font-weight: bold; border-radius: 5%;"
      (click)="incrementDisLike()"
    >
      &#10062; |
      <span>{{ numDisLikes }}</span>
    </button>
  `,
})
export class LikeComponent {

    numLikes: number = 0;
    numDisLikes: number = 0;
    likeState: string = '';

  incrementLike() {

    switch (this.likeState) {
      case '':
        this.likeState = 'liked';
        this.numLikes = this.numLikes + 1;
        break;

      case 'liked':
        this.likeState = '';
        this.numLikes = this.numLikes - 1;
        break;

      case 'disliked':
        this.likeState = 'liked';
        this.numLikes = this.numLikes + 1;
        this.numDisLikes = this.numDisLikes - 1;
        break;
    }
  }

  incrementDisLike() {
    switch (this.likeState) {
      case '':
        this.likeState = 'disliked';
        this.numDisLikes = this.numDisLikes + 1;
        break;

      case 'liked':
        this.likeState = 'disliked';
        this.numLikes = this.numLikes - 1;
        this.numDisLikes = this.numDisLikes + 1;
        break;

      case 'disliked':
        this.likeState = '';
        this.numDisLikes = this.numDisLikes - 1;
        break;
    }
  }
}
