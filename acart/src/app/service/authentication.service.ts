import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Seller } from './seller.service';
export class User
{
  user_id:string
  user_name:string
  password:String
  
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }
  authenticate(user) {
    
   return this.httpClient.put<User>("http://localhost:8085/acart/user/login", user);
  }
  authenticateSeller(seller)
  {
    return this.httpClient.put<Seller>("http://localhost:8085/acart/seller/login", seller);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  isUserCutomer()
  {
    let user = sessionStorage.getItem('userId')
    console.log(!(user === null))
    return !(user === null)
  }
  isUserAdmin()
  {
    let user = sessionStorage.getItem('username')
    if (user=== "Admin")
    {
      return true;
    }
    else{
      return false;
    }
  }
  isUserSeller()
  {
    let user = sessionStorage.getItem('sellername')
    console.log(!(user === null))
    return !(user === null)
  }
isUserShow()
{
  let user1=sessionStorage.getItem('sellername')
  let user2=sessionStorage.getItem('username')
  if((user1===null) && (user2===null))
  {
    return true;
  }
  else
  {
    return false;
  }
}


  logOut() {
    sessionStorage.clear();

  }
}
