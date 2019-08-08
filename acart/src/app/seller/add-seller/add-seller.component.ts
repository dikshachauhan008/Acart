import { Component, OnInit } from '@angular/core';
import { SellerService, Seller } from 'src/app/service/seller.service';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.css']
})
export class AddSellerComponent implements OnInit {

  seller: Seller = new Seller();
  constructor(private sellerService:SellerService) { }

  ngOnInit() {
  }
  createSeller(): void {
    this.sellerService.createSeller(this.seller)
        .subscribe( data => {
          alert("Seller created successfully.");
        });

  }
}