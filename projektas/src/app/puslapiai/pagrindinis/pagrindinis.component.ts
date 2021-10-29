import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';


@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent implements OnInit {

  constructor(private apiServisas: ApiService) {
    this.apiServisas.getMessages().subscribe((duomenys:any)=>{ 
      console.log(duomenys);
      this.NerijausZinutes=duomenys;
      console.log(this.NerijausZinutes);

     });
   }

  ngOnInit(): void {

  }

  NerijausZinutes= [];
  

  import(){
    let zinutes = this.apiServisas.getMessages();

  }
}
