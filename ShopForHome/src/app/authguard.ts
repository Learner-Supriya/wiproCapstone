
import { Component, Injectable, OnInit, Output } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private service: ProductService, private router: Router) { }
    canActivate(): boolean {
        if (this.service.loggedIn()) {
            console.log('11111')
            return true
        }
        if (this.service.AdminloggedIn()) {
           
            console.log('11111')
            return true
        }
        else {
            this.router.navigate([''])
            return false;
        }
    }

}
