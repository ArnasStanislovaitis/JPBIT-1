import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-kontaktai',
  templateUrl: './kontaktai.component.html',
  styleUrls: ['./kontaktai.component.css']
})
export class KontaktaiComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

 siustiZinute(forma: NgForm){
   let zinute=forma.value;
    console.log(zinute);
    forma.resetForm();
 }
  
  
}
