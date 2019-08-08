import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { AddSellerComponent } from './seller/add-seller/add-seller.component';
import { SellerComponent } from './seller/seller/seller.component';
import { AdminGaurdService } from './service/admin-gaurd.service';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerGaurdService } from './service/seller-gaurd.service';
import { SellerProductsComponent } from './seller/seller-products/seller-products.component';
import { ProductsComponent } from './products/ProductList/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { UserComponent } from './User/user/user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { UserDetailsComponent } from './User/user-details/user-details.component';
import { AddAddressComponent } from './User/add-address/add-address.component';

const routes: Routes = [

  {path:"" , redirectTo:'/home', pathMatch:'full'},
  { path:'viewusers', component: UserComponent,canActivate:[AdminGaurdService,AuthGaurdService]},
  { path:'adduser', component: AddUserComponent},
  { path:'home', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'logout', component: LogoutComponent },
  { path : 'addproduct', component: AddProductComponent},
  {path:'addSeller',component: AddSellerComponent},
  {path:'viewsellers',component:SellerComponent,canActivate:[AdminGaurdService]},
  {path:'sellerLogin',component:SellerLoginComponent},
  {path:'sellerProducts',component:SellerProductsComponent},
  { path:'products', component: ProductsComponent},
  {path:'product/:id',component:ProductDetailsComponent},
  {path:'myProfile',component:UserDetailsComponent},
  {path:'addAddress',component:AddAddressComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
