import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, User } from '../service/authentication.service';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  user: User =new User();
  user1:User= new User();
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,private  userService:UserService) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticate(this.user).subscribe(
      response =>this.handleResponse(response));
}
  handleResponse(response)
  {
      this.user1=response;
      if (this.user1)
      {
        sessionStorage.setItem('username', this.user1.user_name);
        sessionStorage.setItem('userId',this.user1.user_id);
       this.router.navigate(['products']);
       this.invalidLogin = false
       return true;
     } 
     else
     {
    this.invalidLogin = true
     return false;
     }
  }

}