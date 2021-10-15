import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-pokalbiai',
  templateUrl: './pokalbiai.component.html',
  styleUrls: ['./pokalbiai.component.css']
})
export class PokalbiaiComponent implements OnInit {
  messages: any = []
  userId: number = 0
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getMessages();
  }

  get messagesUrl(): string {
    return this.api.messagesUrl;
  }

  getMessages() {
    this.api.getMessages().subscribe(data => this.messages = data, error => console.log(error));
  }

}
