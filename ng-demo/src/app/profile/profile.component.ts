import { Component, EventEmitter, Input, Output } from '@angular/core';
import UsersJson from '../users.json';


interface USERS {
  id: Number;
  username: String;
  location: String;
  age: Number;
  photo: String;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],


})

export class ProfileComponent {
  searchId:number=1;
  Users: USERS[] = UsersJson;
  constructor() {
    console.log(this.Users);
  }
  @Input() search= Function;
 
  searchProfile(id:number){
    this.searchId=id;
  }

}
