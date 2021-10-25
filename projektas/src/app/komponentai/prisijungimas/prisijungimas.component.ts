import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-prisijungimas',
  templateUrl: './prisijungimas.component.html',
  styleUrls: ['./prisijungimas.component.css']
})
export class PrisijungimasComponent implements OnInit {


  LoginForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });

  constructor(private api: ApiService) { }

  ngOnInit() {
  }

  get usersUrl(): string {
    return this.api.usersUrl;
  }

  get loginUrl(): string {
    return this.api.loginUrl;
  }

  get user(): any {
    return this.api.user;
  }

  get users(): any {
    return this.api.users;
  }

  getUsers() {
    this.api.getUsers().subscribe(data => this.api.users = data, error => console.log(error));
  }

  loginUser(e: any): boolean {
    let formData = new FormData(e.target);
    this.doLogin(formData, e.target);
    return false
  }

  doLogin(body: any, f: any) {
    this.api.login(body).subscribe(data => {
      console.table(data)
      this.api.user = data
      f.reset()
    }, error => console.log(error));
  }

}
