import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { CartComponent } from './cart/cart.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { ProductsComponent } from './products/products.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './authguard';
import { DiscountComponent } from './discount/discount.component';
import { AdddiscountsComponent } from './adddiscounts/adddiscounts.component';
import { CsvuploadComponent } from './csvupload/csvupload.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminsignup', component: AdminsignupComponent },

  { path: 'ecommerce', component: ECommerceComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'userlogin', component: UserloginComponent },
  { path: 'userregister', component: UserregisterComponent },
  {path: 'discount', component:DiscountComponent},
  {path:'adddiscounts',component:AdddiscountsComponent},
  {path:'csvupload',component:CsvuploadComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'orders',component: OrdersComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
