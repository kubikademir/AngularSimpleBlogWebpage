import { Component } from '@angular/core';
import UsersJson from '../users.json';


interface USERS {
  id: Number;
  username: String;
}


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})


export class UsersComponent {
  
  Users: USERS[] = UsersJson;
  constructor1() {
    console.log(this.Users);
  }

}