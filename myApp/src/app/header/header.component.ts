import { Component, OnInit } from '@angular/core'
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { UserService } from '../user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: SocialUser;
  public loggedIn: boolean;
  public name: String;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.name = this.userService.firstName + ' ' + this.userService.lastName;
    console.log(this.userService.firstName)
  }
}
