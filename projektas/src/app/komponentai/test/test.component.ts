import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  UserForm: FormGroup = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  LoginForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  TokenForm: FormGroup = new FormGroup(
    {
      token: new FormControl('', [Validators.required])
    });

  RestoreForm: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required])
    });


  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getUsers()
    this.api.getSuniukai()
  }

  get suniukai() {
    return this.api.suniukai
  }

  get user(): any {
    return this.api.user;
  }

  get users(): any {
    return this.api.users;
  }

  postUser(body: any) {
    this.api.postUser(0, body).subscribe(data => {
      console.log(data)
      this.UserForm.reset()
    }, error => console.log(error));
  }

  newUser(e: any): boolean {
    let formData = new FormData(e.target);
    this.postUser(formData);
    return true
  }

  doLogin(body: any, f: any) {
    this.api.login(body).subscribe(data => {
      console.table(data)
      this.api.user = data
      f.reset()
    }, error => console.log(error));
  }

  loginUser(e: any): boolean {
    let formData = new FormData(e.target);
    this.doLogin(formData, e.target);
    return false
  }

  doToken(body: any, f: any) {
    this.api.token(body).subscribe(data => {
      console.table(data)
      this.api.user = data
      f.reset()
    }, error => console.log(error));
  }

  getToken(e: any) {
    let formData = new FormData(e.target);
    this.doToken(formData, e.target);
    return false
  }


}
