import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './servisai/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projektas';
  users: any = [];
  arTuscia:number=0;
  UserForm: FormGroup;
  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.UserForm = formBuilder.group({
      'name': [null],
    });
  }



  ngOnInit() {
    this.getUsers();
    this.UserForm = new FormGroup(
      {
        name: new FormControl('name', [Validators.required])
      })
  }

  get usersUrl(): string {
    return this.api.usersUrl;
  }

  get loginUrl(): string {
    return this.api.loginUrl;
  }
  getUsers() {
    this.api.getUsers().subscribe(data => this.users = data);
  }

  naujas(post: any) {
    console.log(post)
    
    this.api.postUser(0, post).subscribe(data => console.log(data));
  }
  pateikti(e: any) {
    let name = e.target.form.name.value
    console.log(name)
    console.log(e)
    this.api.postUser(0, {name:name}).subscribe(data => console.log(data));
  }
  onSubmit(e:any){console.log(e)
    if('name' in e.target.elements){
    let name:string = e.target.elements['name'].value
    console.log(name)

    return name.length?e.target.submit():null
    }
    if('email' in e.target.elements){
      let name:string = e.target.elements['email'].value
      console.log(name)
  
      return name.length?e.target.submit():null
    }
    return false
  }

  nullif(e:any){return e.target.form.name.value.length}

}
