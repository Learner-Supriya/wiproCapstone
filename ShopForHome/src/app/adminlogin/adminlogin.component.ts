import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  admins: Array<Admin> = [];
  storeMsg: string = ""
  loginMsg: string = ""
  logoutMsg: string = ""
  flag: boolean = false;
  email: string = "";
  password: string = "";
  dd: Date = new Date();

  constructor(public service: AdminService, private router: Router, private formBuilder: FormBuilder) { } //DI for Service class

  //it is a life cycle or hook of component it will call after constructor
  //it call only one time
  public loginForm!: FormGroup
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit(): void {

    // checking  form values with registered user detials
    this.service.adminuser().subscribe(res => {
      const user = res.find((a: any) => {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("Admin Login Success");
        this.loginForm.reset();

        localStorage.setItem('token', 'admin')
        this.router.navigate(['/admin'])
      }
      else {
        alert("Invalid credentials")
      }

    })

  }

}

