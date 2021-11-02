import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private authService:AngularFireAuth,
    private router: Router) { }


emailSignup(email:string,password:string){
      this.authService.createUserWithEmailAndPassword(email,password)
      .then(value=>{
      alert("Prisiregistravote sėkmingai")
      console.log('Prisiregistrtuota',value)
      this.router.navigateByUrl('/registracija')
      })
      .catch(error=>{
        alert("Patikrinkite ar viskas suvesta teisingai. Slaptažodis turi susidėti iš nemažiau 6 simbolių")
     console.log('Nepavyksta',error)
     });
    }

    login(email:string,password:string){
      this.authService.signInWithEmailAndPassword(email,password)
      .then(value=>{
        console.log('Veikia')
         this.router.navigateByUrl('/pagrindinis')
      })
       .catch(err=>{
         console.log('Nepavyksta',err.message)
      });
    }

    
    logout(){
      this.authService.signOut()
      .then(()=>{
      this.router.navigateByUrl('/registracija');
    });
    }
   
}
