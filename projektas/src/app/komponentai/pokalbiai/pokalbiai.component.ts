import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';
@Component({
  selector: 'app-pokalbiai',
  templateUrl: './pokalbiai.component.html',
  styleUrls: ['./pokalbiai.component.css']
})
export class PokalbiaiComponent implements OnInit {
  //messages: any = []
  userId: number = 0
  constructor(private api: ApiService) {  }

  ngOnInit() {
    this.api.getMessages();
  }

  get messages(){
    return this.api.messages
  }
  
  getUserName(id:number){
    let user=this.api.users.filter((user:any)=> user.id===id)
    return user.length===1?user[0].name:'Anonimas'
  }
  
  doURL(input:string){
    return  input?input.replace(/(https?:\/\/[^ ]*)/g,'<a title="$1" href="$1" target="_blank" >Link</a>'):'';
  }
}
