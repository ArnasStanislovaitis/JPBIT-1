import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  constructor(private http: HttpClient, private firestore: AngularFirestore) { }

  url = location.protocol + "//ngs.pythonanywhere.com";
  usersUrl = this.url + '/api/users';
  messagesUrl = this.url + '/api/messages';
  loginUrl = this.url + '/api/login';
  tokenUrl = this.url + '/api/token';
  user: any = { id: 0, name: 'Anonimas', token: 'Prisiloginti reikia' }
  users: any = [];
  messages: any = [];
  suniukai: any = [];

  ngOnInit() {

  }

  login(auth: any): Observable<string> {
    return this.http.post<any>(this.loginUrl, auth);
  }

  token(auth: any): Observable<string> {
    return this.http.post<any>(this.tokenUrl + (auth.has('token') ? '/' + auth.get('token') : ''), auth);
  }

  getSuniukai() {
    this.firestore.collection('suniukai').valueChanges().subscribe((x: any) => this.suniukai = x, error => console.log(error));
  }

  getUsers() {
    const headers = { 'token': this.user.token }
    this.http.get<any>(this.usersUrl/*,{headers:headers}*/).subscribe((data: any) => this.users = data, error => { console.log(error); this.users = [] });
  }

  getMessages() {
    const headers = { 'token': this.user.token }
    this.http.get<any>(this.messagesUrl/*,{headers:headers}*/).subscribe((data: any) => this.messages = data, error => { console.log(error); this.messages = [] })
  }

  getUser(id: number): Observable<string> {
    return this.http.get<any>(this.usersUrl + '/' + id);
  }

  putUser(id: number, user: any): Observable<string> {
    return this.http.put<any>(this.usersUrl + '/' + id, user);
  }

  postUser(id: number, user: any): Observable<any> {
    //let headers = new Headers();
    //headers.set('Content-Type', 'application/x-www-form-urlencoded')
    //let params = new HttpParams().set('name', JSON.stringify(user));
    //return this.http.post<any>(this.usersUrl + (id ? '/' + id : ''), params)
    //  .do(user => this.user = user);
    //const headers = { 'Content-Type': 'application/json'}
    //const headers = { 'Content-Type': 'application/x-www-form-urlencoded'}
    //const body = JSON.stringify(user);
    //return this.http.post<any>(this.usersUrl + (id ? '/' + id : ''), body,{headers:headers});
    return this.http.post<any>(this.usersUrl + (id ? '/' + id : ''), user);
  }

  delUser(id: number): Observable<string> {
    return this.http.delete<any>(this.usersUrl + '/' + id);
  }

  getMessage(id: number): Observable<string> {
    return this.http.get<any>(this.messagesUrl + '/' + id);
  }

  putMessage(id: number, message: Message): Observable<string> {
    return this.http.put<any>(this.messagesUrl + '/' + id, message);
  }

  postMessage(id: number, message: any): Observable<string> {
    return this.http.post<any>(this.messagesUrl + '/' + id, message);
  }

  delMessage(id: number): Observable<string> {
    return this.http.delete<any>(this.messagesUrl + '/' + id);
  }
}

export interface Login {
  login: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  name: string;
  is_logged: Boolean;
}

export interface Message {
  id: number;
  date: any;
  user: number;
  body: string;
}

export interface Item {
  nuotrauka: string,
  vardas: string
};

// export interface resetPasword{
//   email: string;
//   login: string;
//   password: string;

// }