import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-vartotojai',
  templateUrl: './vartotojai.component.html',
  styleUrls: ['./vartotojai.component.css']
})
export class VartotojaiComponent implements OnInit {

  constructor(private api: ApiService) {  }

  get usersNull() {
    return this.api.users.filter((user: any) => user.is_logged === null)
  }
  get usersYes() {
    return this.api.users.filter((user: any) => user.is_logged === 1)
  }
  get usersNo() {
    return this.api.users.filter((user: any) => user.is_logged === 0)
  }
  ngOnInit() {
    this.api.getUsers()
  }


}
