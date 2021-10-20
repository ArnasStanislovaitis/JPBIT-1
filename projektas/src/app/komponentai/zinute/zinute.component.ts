import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-zinute',
  templateUrl: './zinute.component.html',
  styleUrls: ['./zinute.component.css']
})
export class ZinuteComponent implements OnInit {
  userId: number = 0
  constructor(private api: ApiService, private formBuilder: FormBuilder) {
    this.MessageForm = formBuilder.group({
      'user': [null],
      'body': [null]
    });
  }
  MessageForm: FormGroup;

  ngOnInit() {
    this.MessageForm = new FormGroup(
      {
        user: new FormControl(this.userId, []),
        body: new FormControl('', [Validators.required])
      })
  }

  get messagesUrl(): string {
    return this.api.messagesUrl;
  }

  postMessage(body: any, f: any) {
    this.api.postMessage(0, body).subscribe(data => {
      console.log(data)
      f.reset()
      this.getMessages()
    }, error => console.log(error));
  }
  getMessages() {
    this.api.getMessages().subscribe(data => this.api.messages = data, error => console.log(error));
  }

  onSubmit(e: any) {
    let formData = new FormData(e.target);
    this.postMessage(formData, e.target)
    return false
  }
}
