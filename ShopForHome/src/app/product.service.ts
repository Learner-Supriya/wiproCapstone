import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Discount } from './discounts';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'//giving the information  in providers attribute in app.module.ts
})
export class ProductService {

  constructor(public http: HttpClient, private router: Router) { } //DI for HttpClient API

  //Loading product detains from the backend
  loadProductDetails(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/product/getAllProduct")
  }

  storeProductDetails(product: Product): Observable<string> {
    return this.http.post("http://localhost:8080/product/storeProduct", product, { responseType: 'text' })
  }

  deleteProductDetails(pid: String): Observable<string> {
    return this.http.delete("http://localhost:8080/product/deleteProduct/" + pid, { responseType: 'text' });
  }

  updateProductInfo(product: any): Observable<string> {
    return this.http.patch("http://localhost:8080/product/updateProduct", product, { responseType: 'text' })
  }

saveDiscount(discount:any):Observable<string>{
  return this.http.patch("http://localhost:8080/discount/storeDiscount", discount, { responseType: 'text' })
}
loadDiscounts(): Observable<Discount[]>{
  return this.http.get<Discount[]>("http://localhost:8080/discount/getAllDiscounts")
}

storeDiscountDetails(discounts:Discount):Observable<string>{
  return this.http.post("http://localhost:8080/discount/storeDiscount", discounts, { responseType: 'text' })
}
deleteDiscountDetails(discountCode: String): Observable<string> {
  return this.http.delete("http://localhost:8080/discount/deleteDiscount/" + discountCode, { responseType: 'text' });
}

getAmount(discountCode: String):Observable<number>{
  return this.http.get<number>("http://localhost:8080/discount/getAmount/" + discountCode);
}
getDiscount():Observable<any>{
  console.log(localStorage.getItem('email'))
  return this.http.get<any>("http://localhost:8080/discount/getUserDiscount/"+localStorage.getItem('email'));
    
}
getOrders(d1:Date,d2:Date):Observable<any>{
  return this.http.get<any>("http://localhost:8080/Admin/profits/"+d1+"/"+d2);
}
  loggedIn() {
    console.log(localStorage.getItem);
    return !!localStorage.getItem('token')
  }

  AdminloggedIn() {
    console.log(localStorage.getItem);
    return localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
}
