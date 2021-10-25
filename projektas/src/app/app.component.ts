import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from './auth.service';


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

  constructor(private firestore: AngularFirestore, private auth : AuthService) {
    this.firestore.collection('suniukai').valueChanges({ idField : 'idLaukas' }).subscribe((x : any) => console.log(x));
  }

  async ngOnInit() {

  }

  addSuniukas(){
    let naujasSuniukas = {
      nuotrauka : "https://images.dog.ceo/breeds/husky/n02110185_698.jpg",
      vardas : "Pridejimo Testas"
    }
    this.firestore.collection('suniukai').doc("manoID").set(naujasSuniukas)
  }

  register(){

    this.auth.emailSignup("Jonas@jonas.com","Jonas123");

  }

  login(){

    this.auth.login("Jonas@jonas.com","Jonas123");
  }

  logout(){
    this.auth.logout();
  }




}
