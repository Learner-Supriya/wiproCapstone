import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-e-commerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']
})
export class ECommerceComponent implements OnInit {
  products: Array<Product> = [];
  storeMsg: string = ""
  deleteMsg: string = ""
  updateMsg: string = ""
  flag: boolean = false;
  pid: String = "";
  price: number = 0;
  pname: String = "";
  category: String = "";
  url: String = "";
  stocks:number=0;

  dd: Date = new Date();
  constructor(public pser: ProductService) { } //DI for Service class

  //it is a life cycle or hook of component it will call after constructor
  //it call only one time

  ngOnInit(): void {
    this.loadProducts();
  }
  // Loading the Product details
  loadProducts(): void {
    this.pser.loadProductDetails().subscribe(res => this.products = res
    );
    console.log('pro', this.products)
  }
  //Storing the product details in the database
  storeProduct(productRef: NgForm) {
    console.log(productRef.value);
    this.pser.storeProductDetails(productRef.value).
      subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadProducts());
    alert("Product Added Successfully");
  }

  //Deleting the product details
  deleteProduct(pid: String) {
    this.pser.deleteProductDetails(pid).
      subscribe(res => this.deleteMsg = res, error => console.log(error), () => this.loadProducts())
  }

  // Updating the product details
  updateProduct(product: Product) {
    console.log(product);
    this.flag = true;
    this.pid = product.productId;
    this.price = product.productPrice;
    this.category = product.productCategory;
    this.pname = product.productName;
    this.url = product.url;
  }
  updateProductPrice() {
    let product = { "pid": this.pid, "price": this.price, "pname": this.pname, "category": this.category, "url": this.url ,"stocks":this.stocks}
    console.log(product);
    this.pser.updateProductInfo(product).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        this.loadProducts();
        alert("Product Updated Successfully");
        this.flag = false;
      })
  }
}
