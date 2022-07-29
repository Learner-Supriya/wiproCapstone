import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Orders } from '../orders';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  order: Array<Orders> = [];
  d1:Date|any;
  d2:Date|any;
  constructor(private api: ProductService ) { }

  ngOnInit(): void {

    
  }
  onSubmit(){
    this.api.getOrders(this.d1,this.d2)
    .subscribe(res => {
      this.order = res;

    });}

}
