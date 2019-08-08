import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { Products, ProductService } from 'src/app/service/product.service';
import { Categories, CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public filterdata=0;
  
  products:Products[];
  categories:Categories[];
  product: Products;
  id:any;
  constructor(private productService: ProductService,private categoryService: CategoryService,private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(
      response =>this.handleSuccessfulResponse(response),
     );
     this.categoryService.getCategories().subscribe(
      response =>this.handleSuccessfulResponseCategory(response),
     );
  }
  handleSuccessfulResponse(response)
  {
      this.products=response;
  }
  handleSuccessfulResponseCategory(response)
  {
    this.categories=response;
  }
  filterEvent(category:Categories)
{
  this.filterdata=category.category_id;
  console.log(this.filterdata);

}




  

}
