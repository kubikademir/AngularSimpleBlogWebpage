
import { Component, EventEmitter, Output, NgModule } from '@angular/core';

@Component({
  selector: 'app-search-user',
  template: `

    <input style="width: 75%;" #getId placeholder="Enter ID" max=10 type="number" min=1
    [(ngModel)]='searchText'
      >
      
    <button type="button" (click)="search()">Search</button>
  `
})

export class SearchUserComponent {
  searchText:number=1
  @Output() onSearch= new EventEmitter<number>();
  search(){
    this.onSearch.emit(this.searchText);
  }
}
