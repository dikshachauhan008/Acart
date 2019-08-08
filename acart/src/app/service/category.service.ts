import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
export class Categories
{
  category_id: any;
  category_name:string;
  
}
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  constructor(private httpClient :HttpClient) { }
  getCategories()
  {
    return this.httpClient.get<Categories[]>('http://localhost:8085/acart/category/all');
  }

}
