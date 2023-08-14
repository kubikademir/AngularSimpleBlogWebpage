import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SearchUserComponent} from  './search-user.component'
import { LikeComponent} from  './like.component'


const routes: Routes = [
  { path: '', component: AppComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProfileComponent,
    SearchUserComponent,  
    LikeComponent,

  ],

  imports: [
 
    RouterModule.forRoot([
      {path: 'users', component: UsersComponent},
      {path: 'profile', component: ProfileComponent},

    ]),


    BrowserAnimationsModule,
    BrowserModule,
    RippleModule,
    HttpClientModule,
    MenuModule,
    ButtonModule,
    AppRoutingModule,
    FormsModule,
    NgxScrollTopModule,
    NgxPaginationModule,
  ],

  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }