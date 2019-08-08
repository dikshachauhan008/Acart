import { Component, OnInit } from '@angular/core';

import {Router,ActivatedRoute, ParamMap} from '@angular/router';
import { ProductService, Products } from 'src/app/service/product.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product$: Observable<Products>;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.product$=this.productService.getProduct(id);
  
  }


  

}
