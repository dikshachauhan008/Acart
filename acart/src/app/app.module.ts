import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryComponent } from './category/category.component';
import { AddSellerComponent } from './seller/add-seller/add-seller.component';
import { SellerComponent } from './seller/seller/seller.component';
import { SellerLoginComponent } from './seller/seller-login/seller-login.component';
import { SellerProductsComponent } from './seller/seller-products/seller-products.component';

import { ProductsComponent } from './products/ProductList/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { FilterSellerProductsPipe } from './service/filter-seller-products.pipe';
import { UserComponent } from './User/user/user.component';
import { AddUserComponent } from './User/add-user/add-user.component';
import { AddProductComponent } from './products/add-product/add-product.component';

import { UserDetailsComponent } from './User/user-details/user-details.component';
import { FilterproductsPipe } from './service/filter.pipe';
import { AddressPipe } from './service/address.pipe';
import { AddAddressComponent } from './User/add-address/add-address.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    CategoryComponent,
    AddProductComponent,
    AddSellerComponent,
    SellerComponent,
    SellerLoginComponent,
    SellerProductsComponent,
    FilterproductsPipe,
    ProductsComponent,
    ProductDetailsComponent,
    FilterSellerProductsPipe,
    UserDetailsComponent,
    AddressPipe,
    AddAddressComponent
  
  ],
  imports: [
    BrowserModule,
     HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
