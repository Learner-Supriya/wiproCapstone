import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  // Connecting to the backend code
  getProduct() {
    return this.http.get<any>("http://localhost:8080/product/getAllProduct")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getDiscount(){
    console.log(localStorage.getItem('email'))
    return this.http.get<any>("http://localhost:8080/discount/getUserDiscount/"+localStorage.getItem('email'))
      .pipe(map((res: any) => {
        return res;
      }))
  }
  
}