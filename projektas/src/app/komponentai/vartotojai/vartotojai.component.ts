import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-vartotojai',
  templateUrl: './vartotojai.component.html',
  styleUrls: ['./vartotojai.component.css']
})
export class VartotojaiComponent implements OnInit {

  usersYes: any = [];
  usersNo: any = [];

  constructor(private api: ApiService) {
  }

  get users() {
    return this.api.users
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    /*this.api.getUsers().subscribe(data => this.users = data, error => console.log(error));*/
    this.api.getUsers().subscribe((data: any) => {
      this.api.users = data
      this.usersYes = this.api.users.filter((user: any) => user.is_logged === 1)
      this.usersNo =this.api.users.filter((user: any) => user.is_logged === 0)
    },

      (error: any) => console.log(error));
  }



}
