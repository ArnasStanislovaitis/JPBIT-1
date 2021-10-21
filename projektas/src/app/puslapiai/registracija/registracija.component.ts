import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})

export class RegistracijaComponent implements OnInit {


  arTuscia: number = 0;

  constructor(private api: ApiService) { }

  ngOnInit() {

  }

  UserForm = new FormGroup(
    {
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      emailAtkurimas: new FormControl('', [Validators.required])
    })

  postUser() {
    this.api.postUser(0, this.UserForm.value).subscribe(data => {
      console.log(data)
      if ('errno' in data) alert(data.error)
      else{
        this.UserForm.reset()
        window.location.href=('/pagrindinis');
      }
    }, error => console.log(error));
  }
atkurti=false;
  slaptazodzioAtkurimas(){
    this.atkurti=true;
  }
  siustiAtkurimui(){
this.UserForm.value.emailAtkurimas;
console.log(this.UserForm.value.emailAtkurimas);
this.atkurti=false;
this.UserForm.reset();
  }
}







