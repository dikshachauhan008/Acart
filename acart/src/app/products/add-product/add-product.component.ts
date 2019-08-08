import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Products, ProductService } from 'src/app/service/product.service';
import { Categories, CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  public userFile:any=File;
  product:Products=new Products();
  reactiveForm: any=FormGroup;
  categories:Categories[];
  constructor(public productService:ProductService, private formBuilder:FormBuilder,private categoryService: CategoryService) {
    this.reactiveForm=this.formBuilder.group(
      { 
        product_name: new FormControl(),
        description:new FormControl(),
        short_desc:new FormControl(),
        price: new FormControl(),
        delivery_charges: new FormControl(),
        category_id: new FormControl(),
        
      });

   }

  ngOnInit()
   { 
    this.categoryService.getCategories().subscribe(
      response =>this.handleSuccessfulResponseCategory(response),
     );
    }
  onSelectedFile(event)
  {
    const file=event.target.files[0];
    this.userFile=file;
  }

  save(submitForm: FormGroup):void
  {
    const product=submitForm.value;
    let number1=sessionStorage.getItem('sellerId');
    console.log(number1);
    product.seller_id=number1;
    const formData= new FormData();
    formData.append('product',JSON.stringify(product));
    formData.append('file',this.userFile);
    formData.append('sellerId',number1);
    this.productService.saveProduct(formData)
    .subscribe( data => {
      alert("Product added successfully.");
    });

  }
  handleSuccessfulResponseCategory(response)
  {
    this.categories=response;
  }
    
  }
