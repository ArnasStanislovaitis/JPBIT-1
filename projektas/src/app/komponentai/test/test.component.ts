import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {

  users: any = [];
  arTuscia: number = 0;
  UserForm: FormGroup;
  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.UserForm = formBuilder.group({
      'name': [null],
      'email': [null],
      'password': [null]
    });
  }

  ngOnInit() {
    this.getUsers();
    this.UserForm = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required]),
      })
  }

  get usersUrl(): string {
    return this.api.usersUrl;
  }

  get loginUrl(): string {
    return this.api.loginUrl;
  }

  /*getUsers() {
    this.api.getUsers().subscribe(data => this.users = data, error => console.log(error));
  }*/

  postUser(body: any) {
    this.api.postUser(0, body).subscribe(data => {
      console.log(data)
      this.UserForm.reset()
    }, error => console.log(error));
  }

  doLogin(body: any, f: any) {
    this.api.login(body).subscribe(data => {
      console.log(data)
      f.reset()
    }, error => console.log(error));
  }

  newUser(e: any): boolean {
    let formData = new FormData(e.target);
    this.postUser(formData);
    return true
  }

  onSubmit1(e: any) {
    console.log(e)
    if ('name' in e.target.elements) {
      let name: string = e.target.elements['name'].value
      console.log(name)

      return name.length ? e.target.submit() : null
    }
    if ('email' in e.target.elements) {
      let name: string = e.target.elements['email'].value
      console.log(name)

      return name.length ? e.target.submit() : null
    }
    return false
  }

  onSubmit(e: any) {
    console.log(e)
    let formData = new FormData(e.target);

    if ('name' in e.target.elements) {
      this.postUser(formData);
    } else {
      this.doLogin(formData, e.target)
    }

    return false
  }

}
