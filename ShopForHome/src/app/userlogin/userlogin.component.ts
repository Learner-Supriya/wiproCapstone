import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Users } from '../users';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public loginForm!: FormGroup
  constructor(public service: UsersService, private route: Router, private formBuilder: FormBuilder, private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onSubmit(): void {
    // check form values with registered user detials
    this.service.loginUser().subscribe(res => {
      const user = res.find((a: any) => {
        localStorage.setItem('email',this.loginForm.value.email);
        console.log(localStorage.getItem('email'));
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      })
      if (user) {
        alert("User Login  Success");
        this.loginForm.reset();
        localStorage.setItem('token', 'user')
        this.router.navigate(['/products'])
      }
      else {
        alert("Invalid credentials")
      }

    })
  }
}
