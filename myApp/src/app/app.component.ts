import { Component, OnInit, Injectable } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  finished = false;
  socialUser: SocialUser;
  isLoggedin: boolean;
  appToken = localStorage.getItem('APP_TOKEN');

  constructor(
    private authService: SocialAuthService,
    private userService: UserService
  ) {
    this.userService.authToken = 'authToken';
    this.userService.firstName = 'Erik'; 
    this.userService.lastName = 'Iverson'; 
    this.userService.userEmail = 'erik.iverson2@gmail.com'; 
  }

  title = 'POOHPS';


  ngOnInit(){
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      this.userService.authToken = 'authToken'; // this.socialUser.authToken;
      this.userService.firstName = 'Erik'; // this.socialUser.firstName;
      this.userService.lastName = 'Iverson'; // this.socialUser.lastName;
      this.userService.userEmail = 'erik.iverson2@gmail.com'; //this.socialUser.email;
      this.isLoggedin = (user != null);
      localStorage.setItem('APP_TOKEN', user.authToken);
      console.log('user:', this.socialUser);
    });
  }
}
