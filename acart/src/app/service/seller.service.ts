import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

export class Seller
{
  seller_id:string;
  seller_name:string;
  mail_id:string;
  password:string; 
}

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private httpClient:HttpClient) { }
  public createSeller(seller) {
    return this.httpClient.post<Seller>("http://localhost:8085/acart/seller/add", seller);
  }

  getSeller()
  {
    
    return this.httpClient.get<Seller[]>('http://localhost:8085/acart/seller/all');
  }
  public deleteSeller(seller) {
    return this.httpClient.delete<Seller>("http://localhost:8085/acart/seller" + "/"+ seller.seller_id);
  }
}
