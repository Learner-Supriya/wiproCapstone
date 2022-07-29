import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public totalItem: number = 0;
  public wishlistnumber:number=0;
  public searchTerm: string = '';
  constructor(private cartService: CartService, public service: ProductService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
      .subscribe(res => {
        this.totalItem = res.length;
      })
      this.cartService.getWishlisted()
      .subscribe(res => {
        this.wishlistnumber = Object.keys(res).length;
      })

  }

  //Searching the products from the product list
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
}
