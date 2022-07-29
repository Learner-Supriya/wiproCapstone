import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { AdminComponent } from './admin/admin.component';
import { FilterPipe } from './shared/filter.pipe';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { AuthGuard } from './authguard';
import { MatInputModule } from '@angular/material/input';
import { DiscountComponent } from './discount/discount.component';
import { AdddiscountsComponent } from './adddiscounts/adddiscounts.component';
import { Adddiscounts123Component } from './adddiscounts123/adddiscounts123.component';
import { CsvuploadComponent } from './csvupload/csvupload.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';






@NgModule({
  declarations: [
    AppComponent,
    ECommerceComponent,
    UsersComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    AdminComponent,
    FilterPipe,
    UserloginComponent,
    UserregisterComponent,
    AdminloginComponent,
    AdminsignupComponent,
    DiscountComponent,
    AdddiscountsComponent,
    Adddiscounts123Component,
    CsvuploadComponent,
    WishlistComponent,
    OrdersComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ],

  providers: [
    {
      provide: ProductsComponent
    },
    {
      provide: AuthGuard
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
