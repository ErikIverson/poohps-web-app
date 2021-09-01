import { Injectable } from '@angular/core';
import { SocialAuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  firstName: string;
  lastName: string;
  userEmail: string;
  authToken: string;
  refreshToken: string;

}
