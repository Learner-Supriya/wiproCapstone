import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

 
  
  products: Array<Product> = [];
  storeMsg: string = ""
  deleteMsg: string = ""
  updateMsg: string = ""
  flag: boolean = false;
  productId: String = "";
  productPrice: number = 0;
  productName: String = "";
  productCategory: String = "";
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
    this.productId = product.productId;
    this.productPrice = product.productPrice;
    this.productCategory = product.productCategory;
    this.productName = product.productName;
    this.url = product.url;
  }
  updateProductPrice() {
    let product = { "productId": this.productId, "productPrice": this.productPrice, "productName": this.productName, "productCategory": this.productCategory, "url": this.url,"stocks":this.stocks }
    console.log(product);
    this.loadProducts();
    this.pser.updateProductInfo(product).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        this.loadProducts();
        alert("Product Updated Successfully");
        this.flag = false;
        window.location.reload()
      })
  }


}

