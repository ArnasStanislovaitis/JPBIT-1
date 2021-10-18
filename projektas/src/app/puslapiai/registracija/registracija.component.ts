import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})

export class RegistracijaComponent implements OnInit {

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

  getUsers() {
    this.api.getUsers().subscribe(data => this.users = data, error => console.log(error));
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

  get usersUrl(): string {
    return this.api.usersUrl;
  }

  pereiti(){
    window.open('pagrindinis');
  }
  

}







