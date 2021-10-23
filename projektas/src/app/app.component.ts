import { Component, OnInit } from '@angular/core';


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



ngOnInit() {

  }




}
