import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Seller } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrls: ['./seller-login.component.css']
})
export class SellerLoginComponent implements OnInit {
  seller: Seller =new Seller();
  seller1: Seller =new Seller();
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService) { }
  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticateSeller(this.seller).subscribe(
      response =>this.handleResponse(response));
}
  handleResponse(response)
  {
      this.seller1=response;
      if (this.seller1)
      {
        sessionStorage.setItem('sellername', this.seller.seller_name);
        sessionStorage.setItem('sellerId',this.seller1.seller_id);
       this.router.navigate(['products']);
       this.invalidLogin = false;
       return true;
     } 
     else
     {
    this.invalidLogin = true;
     return false;
     }
  }
}