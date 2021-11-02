import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servisai/api.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-pagrindinis',
  templateUrl: './pagrindinis.component.html',
  styleUrls: ['./pagrindinis.component.css']
})
export class PagrindinisComponent implements OnInit {
  
 
  constructor(private apiServisas: ApiService, private firestore: AngularFirestore) {
    this.apiServisas.getMessages().subscribe((duomenys:any)=>{ 
      
      this.NerijausZinutes=duomenys;
      
      
     });

     this.firestore.collection('messages').valueChanges({ idField : 'id' }).subscribe((x : any) => this.VisosZinutes = x);
   }

  ngOnInit(): void {

  }

  NerijausZinutes= [];
  VisosZinutes= [];
  

  async import(){

   for (let index = 0; index < this.VisosZinutes.length; index++) {
     const element: any = this.VisosZinutes[index];
     this.firestore.collection('messages').doc(element.id).delete();
     
   }

    for (let index = 0; index < this.NerijausZinutes.length; index++) {
      const zinute: any = this.NerijausZinutes[index];
      
      this.firestore.collection('messages').doc(zinute.id.toString()).set(zinute);
    }
    

  }
}
