import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  grandTotal = 0;

  baseUrl="http://localhost:8080"


  constructor(
    private http:HttpClient

  ) { }
  //Getting all the products
  getProducts() {
    return this.productList.asObservable();
  }
  setProducts(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  // Removing the item from the cart
  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.productId === a.productId) {
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
  }
  //Removing all existing products from the cart
  removeAllCart() {
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

  //Generating the bill
  getTotalPrice() {
    this.grandTotal = 0;
    this.cartItemList.forEach((product: any) => {
      this.grandTotal += (product.quantity * product.productPrice);
    })
    return this.grandTotal;
  }
  //if cart is empty we are adding products into cart
  addtoCart(product: any) {
    let productExists = false
    for (let i in this.cartItemList) {
      if (this.cartItemList[i].productPid === product.productId) {
        this.cartItemList[i].quantity++
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItemList.push({
        productPid: product.productId,
        productName: product.productName,
        url: product.url,
        quantity: 1,
        productPrice: product.productPrice,
        productCategory: product.productCategory
      })
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
    }
  }
  addToWishlist(product:any){
    this.http.post("http://localhost:8080/wishlist/add/"+localStorage.getItem('email'),product)
    .subscribe(
      res=>{
        console.log(res)
      }
    )
}

getWishlisted():Observable<any>{
  return this.http.get<any>("http://localhost:8080/wishlist/get/"+localStorage.getItem('email'))
}
removeFromWishlist(product:any){
  this.http.post("http://localhost:8080/wishlist/remove/"+localStorage.getItem('email'),product)
  .subscribe(
    res=>
    console.log(res)
  )
}

}






