import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterproducts'
})
export class FilterproductsPipe implements PipeTransform {

  transform(products: any[], criteria: number): any {
    if(criteria===0){return products;}
    return products.filter(products=> {
      return products.category_id=== criteria
    });
  }

}