import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../product.service';
import { Discount } from '../discounts';
import { AdddiscountsComponent } from '../adddiscounts/adddiscounts.component';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  discount: Array<Discount> = [];
  couponCode:string="picchi pulka";
  public discAmount:number=0;
  public products: any = [];
  public grandTotal !: number;
  deleteMsg:any=""
  //public finalTotal !: number;

  constructor(private cartService: CartService,public pser: ProductService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.products = res;
        this.grandTotal = this.cartService.getTotalPrice();

      })
  }

  // Removing the item from the cart
  removeItem(product: any) {
    this.cartService.removeCartItem(product);
  }
  //After Removing cart is empty
  emptycart() {
    this.cartService.removeAllCart();
  }

  // Updating the cart with required products
  updatecart() {
    this.grandTotal = this.cartService.getTotalPrice();
    this.grandTotal = this.grandTotal;
  }
  // Increasing the Quantity of the products
  inc(product: any) {
    product.quantity += 1;
    this.updatecart();
  }

  // Decreasing the Quantity of the products

  des(product: any) {
    if (product.quantity != 1) {
      product.quantity -= 1;
      this.updatecart();
    }
  }
coupon(couponCode: string){

  this.couponCode=couponCode;
  
  console.log(this.couponCode);
    this.pser.getAmount(this.couponCode).
      subscribe((res:number) =>{this.grandTotal=this.grandTotal-res})
    //this.grandTotal=this.grandTotal-res
    console.log(this.discAmount);  
    
  
}
placeOrder(){
  this.pser.deleteDiscountDetails(this.couponCode).
      subscribe(res => this.deleteMsg = res, error => console.log(error), () => this.pser.loadDiscounts().subscribe(res => this.discount = res
        ))
  alert("Order placed Succesfully. Please pay "+this.grandTotal+" on delivery of products")
  window.location.reload()
}
}

