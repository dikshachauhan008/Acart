import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';




@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
