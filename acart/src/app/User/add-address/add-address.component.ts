import { Component, OnInit } from '@angular/core';
import { Address, UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  address: Address = new Address();
  constructor(private userService: UserService,private router: Router) { }

  ngOnInit() {
  }
  addAddress(): void {
    let number1=sessionStorage.getItem('userId');
    let value=Number(number1);
    this.address.user_id=value;
    this.userService.addAddress(this.address)
        .subscribe( data => {
          alert("Address added successfully.");
        });
  this.router.navigate(['myProfile']);

  };

}