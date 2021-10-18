import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/servisai/api.service';

@Component({
  selector: 'app-vartotojai',
  templateUrl: './vartotojai.component.html',
  styleUrls: ['./vartotojai.component.css']
})
export class VartotojaiComponent implements OnInit {

users: any = [];

constructor(private api: ApiService) {
}

get usersUrl(): string {
  return this.api.usersUrl;
}

  ngOnInit() {
    this.getUsers();
    }

  getUsers() {
    this.api.getUsers().subscribe(data => this.users = data, error => console.log(error));
  }

}
