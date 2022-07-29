import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { UsersService } from '../users.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Array<Users> = [];
  storeMsg: string = ""
  deleteMsg: string = ""
  updateMsg: string = ""
  loginMsg: string = ""
  logoutMsg: string = ""
  flag: boolean = false;
  email: string = "";
  password: string = "";
  dd: Date = new Date();

  constructor(public pser: UsersService) { } //DI for Service class

  //it is a life cycle or hook of component it will call after constructor
  //it call only one time

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    console.log("Event Fired");
    this.pser.loginUser().subscribe(res => this.users = res);
    console.log('use', this.users)
  }

  //User able to logout with this function
  logoutUser(email: string) {
    //console.log("Event Fired")
    this.pser.logoutUserDetails(email).subscribe(res => this.logoutMsg = res, error => console.log(error), () => this.loadUsers());
  }

  //Storing user information
  storeUser(userRef: NgForm) {
    // console.log(userRef.value);
    this.pser.storeUserDetails(userRef.value).
      subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadUsers());
  }

  //Deleting the existing user information
  deleteUser(email: string) {
    //console.log(email);
    this.pser.deleteUserDetails(email).
      subscribe(res => this.deleteMsg = res, error => console.log(error), () => this.loadUsers())
  }

  // Updating the user information
  updateUser(user: Users) {
    console.log('first', user);
    this.flag = true;
    this.email = user.email;
    this.password = user.password;
  }
  updateUserInfo() {
    let user = { "email": this.email, "password": this.password }
    console.log('check', user);
    this.loadUsers
    this.pser.updateUserDetails(user).subscribe(result => this.updateMsg = result, error => console.log(error),
      () => {
        console.log('teo')
        this.loadUsers
        alert("User Updated Successfully");
        this.flag = false;
       // window.location.reload()
      })
  }
}
