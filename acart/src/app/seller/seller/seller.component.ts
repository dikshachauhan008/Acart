import { Component, OnInit } from '@angular/core';
import { SellerService, Seller } from 'src/app/service/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  sellers : Seller[];
  constructor(private sellerService:SellerService) { }

  ngOnInit() {
    this.sellerService.getSeller().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
  }
  handleSuccessfulResponse(response)
  {
      this.sellers=response;
  }
  deleteUser(seller: Seller): void {
    this.sellerService.deleteSeller(seller)
      .subscribe( data => {
        this.sellers = this.sellers.filter(u => u !== seller);
      })
      alert("Seller deleted");
  };

}
