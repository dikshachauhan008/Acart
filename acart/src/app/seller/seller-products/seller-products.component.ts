import { Component, OnInit } from '@angular/core';
import { Products, ProductService } from 'src/app/service/product.service';
import { Categories, CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-seller-products',
  templateUrl: './seller-products.component.html',
  styleUrls: ['./seller-products.component.css']
})
export class SellerProductsComponent implements OnInit {

  public filterdata=0;
  
  products:Products[];
  categories:Categories[];
  product: Products;
  id:any;
  public filter1=0;
 
  constructor(private productService: ProductService,private categoryService: CategoryService) { }

  ngOnInit() {
    let seller=sessionStorage.getItem('sellerId');
    this.filter1=Number(seller);
    console.log(this.filter1);
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