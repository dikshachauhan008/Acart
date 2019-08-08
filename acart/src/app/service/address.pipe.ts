import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addressFilter'
})
export class AddressPipe implements PipeTransform {

  transform(address: any[], criteria: number): any {
    if(!address) return [];
    return address.filter(address=> {
      return address.user_id=== criteria
    });
  }
}
