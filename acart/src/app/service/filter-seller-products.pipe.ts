import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSellerProducts'
})
export class FilterSellerProductsPipe implements PipeTransform {

  transform(products: any[], criteria: number, seller:number): any {
    if((criteria===0) && !(seller==0))
    {return products.filter(products=>{
      return products.seller_id===seller
    });
    }
   else
   {
      return products.filter(products=> {
      return ((products.category_id=== criteria)&&(products.seller_id=== seller))
    });
  }
  }
}
