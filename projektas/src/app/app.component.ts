import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


interface Item {
  nuotrauka: string,
  vardas: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projektas';

  suniukai : any[] = [];

  constructor(firestore: AngularFirestore) {
    firestore.collection('suniukai').valueChanges().subscribe((x : any) => this.suniukai = x);
  }

  async ngOnInit() {

  }




}
