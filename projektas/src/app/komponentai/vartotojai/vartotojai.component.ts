import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-vartotojai',
  templateUrl: './vartotojai.component.html',
  styleUrls: ['./vartotojai.component.css']
})
export class VartotojaiComponent implements OnInit {

  users: any = [];
  usersNo: any = [];

  constructor(private api: ApiService) {
  }

  get usersUrl(): string {
    return this.api.usersUrl;
  }

  ngOnInit() {
    this.getUsers();
    this.getUsersNo();
  }

  getUsers() {
    /*this.api.getUsers().subscribe(data => this.users = data, error => console.log(error));*/
    this.api.getUsers().subscribe((data: any) => {
      this.users = data.filter((user:any) => user.is_logged === 1)
  },
  
  (error: any) => console.log(error));}

  getUsersNo() {
    /*this.api.getUsers().subscribe(data => this.users = data, error => console.log(error));*/
   this.api.getUsersNo().subscribe((data: any) => {
      this.usersNo = data.filter((user:any) => user.is_logged === null)
  },
  
  (error: any) => console.log(error));}

  
}
