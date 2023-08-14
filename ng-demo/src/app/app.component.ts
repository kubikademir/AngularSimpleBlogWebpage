import UsersJson from './users.json';
import PostsJson from './posts.json';
import CommentsJson from './comments.json';
import { Component, HostListener, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MessageService, PrimeNGConfig } from 'primeng/api';
import { __values } from 'tslib';


interface USERS {
  id: Number;
  username: String;
}

interface POSTS {
  userId: Number;
  id: Number;
  body: String;
}

interface COMMENTS {
  postId: Number;
  name: String;
  body: String;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService],
  styles: []
})

export class AppComponent implements OnInit {
  


  test: MenuItem[] = [];
  title: any;
  profileId:number=0;

  constructor(private primengConfig: PrimeNGConfig) {}

  
  ngOnInit() {


  }
   

  collection: any;
  p: string | number | undefined;

  Users: USERS[] = UsersJson;
  constructor1() {
    console.log(this.Users);
  }

  Posts: POSTS[] = PostsJson;
  constructor2() {
    console.log(this.Posts);
  }

  Comments: COMMENTS[] = CommentsJson;
  constructor3() {
    console.log(this.Comments);
  }
  scrollTop() {
    window.scrollTo(0, 0);
  }
}
