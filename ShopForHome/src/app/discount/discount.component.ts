import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Discount } from '../discounts';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  userdiscount: Array<Discount> = [];
  public discount:any
  constructor(private api: ProductService) { }

  ngOnInit(): void {
    

    console.log(localStorage.getItem('email'));
    this.api.getDiscount()
    .subscribe(res => {
      this.userdiscount = res;

    });}

}
