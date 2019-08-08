import { Component, OnInit } from '@angular/core';
import { UserService, Address } from 'src/app/service/user.service';
import { User } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:User=new User();
  public filter1=0;
  addresses:Address[];
  constructor(private userService:UserService,private router: Router) { }

  ngOnInit() {
    let user=sessionStorage.getItem('userId');
    let user1= Number(user);
    this.filter1=Number(user1);
    this.userService.getUserDetails(user1).subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
     this.userService.getUserAddress().subscribe(
      response =>this.handleSuccessfulResponse1(response),
     );
  }
  handleSuccessfulResponse(response)
  {
      this.user=response;
  }
  handleSuccessfulResponse1(response)
  {
    this.addresses=response;
  }
  deleteAddress(address: Address): void {
    this.userService.deleteAddress(address)
      .subscribe( data => {
        this.addresses = this.addresses.filter(u => u !== address);
        })
      alert("Address deleted");
      this.router.navigate(['myProfile']);
  };

  

}
