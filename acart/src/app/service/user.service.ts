import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './authentication.service';
export class Address
{
  user_id:number
  city:string
  address_info:string
  country_id:number
  state_id:number
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUser()
  {
    console.log("test call");
    return this.httpClient.get<User[]>('http://localhost:8085/acart/user/all');
  }
  public deleteUser(user) {
    return this.httpClient.delete<User>("http://localhost:8085/acart/user" + "/"+ user.user_id);
  }

  public createUser(user) {
    return this.httpClient.post<User>("http://localhost:8085/acart/user/add", user);
  }
  public getUserDetails(user_id:any)
  {
    return this.httpClient.get<User>("http://localhost:8085/acart/user" + "/"+user_id);
  }
  getUserAddress()
  {
    return this.httpClient.get<Address>('http://localhost:8085/acart/address/all');
  }
  public deleteAddress(address) {
    return this.httpClient.delete<Address>("http://localhost:8085/acart/address/delete" + "/"+ address.address_id);
  }
  public addAddress(address) {
    return this.httpClient.post<Address>("http://localhost:8085/acart/address/add", address);
  }
}