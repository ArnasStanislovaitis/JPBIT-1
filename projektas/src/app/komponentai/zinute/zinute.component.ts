import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-zinute',
  templateUrl: './zinute.component.html',
  styleUrls: ['./zinute.component.css']
})
export class ZinuteComponent implements OnInit {
  MessageForm: FormGroup = new FormGroup(
    {
      user: new FormControl(this.userId, []),
      body: new FormControl('', [Validators.required])
    });

  constructor(private api: ApiService) { }

  ngOnInit() { }

  get userId(){
    return this.api.user.id
  }
  
  get userName(){
    return this.api.user.name || 'Anonimas'
  }
  
  postMessage(body: any, f: any) {
    this.api.postMessage(0, body).subscribe(data => {
      console.log(data)
      f.reset()
      this.api.getMessages()
    }, error => console.log(error));
  }

  onSubmit(e: any) {
    let formData = new FormData(e.target);
    formData.set('user',this.api.user.id)
    this.postMessage(formData, e.target)
    return false
  }
}
