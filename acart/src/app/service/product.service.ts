import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
export class Products
{
  product_id:number;
  product_name:string;
  description:string;
  short_desc:string;
  price:number;
  delivery_charges:number;  
  seller_id: string;
}
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  
  getProducts()
  {
    return this.httpClient.get<Products[]>('http://localhost:8085/acart/product/all');
  }
  public getProduct(product_id) {
    return this.httpClient.get<Products>("http://localhost:8085/acart/product" + "/"+product_id);
  }
  saveProduct(formdata: FormData)
  {
    return this.httpClient.post("http://localhost:8085/acart/product/saveProduct",formdata);
  }
}
