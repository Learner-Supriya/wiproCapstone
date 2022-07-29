import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {
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

  constructor(public pser: UsersService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    //console.log("Event Fired")
    this.pser.loadUserDetails().subscribe(res => this.users = res);
  }

  //Storing the user information
  storeUser(userRef: NgForm) {
    this.pser.storeUserDetails(userRef.value).
      subscribe(res => this.storeMsg = res, error => console.log(error), () => this.loadUsers());
  }
}
