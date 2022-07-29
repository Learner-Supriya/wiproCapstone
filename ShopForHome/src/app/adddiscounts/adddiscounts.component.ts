import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Discount } from '../discounts';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-adddiscounts',
  templateUrl: './adddiscounts.component.html',
  styleUrls: ['./adddiscounts.component.css']
})
export class AdddiscountsComponent implements OnInit {

  discount: Array<Discount> = [];
  storeMsg: string = ""
  deleteMsg: string = ""
  flag: boolean = false;
  discountCode: String = "";
  discountAmount: number = 0;
  discountName: String = "";
  email:String="";


  constructor(public pser: ProductService) { }

  ngOnInit(): void {
    this.loadDiscounts();
  }

  change():void{
    this.flag=true;
  }

  loadDiscounts(): void {
    this.pser.loadDiscounts().subscribe(res => this.discount = res
    );
    console.log('disc', this.discount)
  }

  storeDiscount(productRef: NgForm) {
    console.log(productRef.value);
    this.pser.storeDiscountDetails(productRef.value).
      subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadDiscounts());
    alert("Discount Added Successfully");
    this.flag=false;
  }

  deleteDiscount(discountCode: String) {
    this.pser.deleteDiscountDetails(discountCode).
      subscribe(res => this.deleteMsg = res, error => console.log(error), () => this.loadDiscounts())
  }

  updateProduct(discounts: Discount) {
    console.log(discounts);
    this.flag = true;
    this.discountCode = discounts.discountCode;
    this.discountAmount = discounts.discountAmount;
    this.discountName =discounts.discountName;

  }
}
