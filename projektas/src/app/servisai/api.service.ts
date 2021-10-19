import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit {

  constructor(private http: HttpClient) { }
  url = "http://ngs.pythonanywhere.com";
  usersUrl = this.url + '/api/users';
  messagesUrl = this.url + '/api/messages';
  loginUrl = this.url + '/api/login';
  users: any = [];
  usersNo: any = [];
  messages: any = [];

  ngOnInit() {

  }

  login(auth: any): Observable<string> {
    return this.http.post<any>(this.loginUrl, auth);
  }

  getUsers(): Observable<string> {
    return this.http.get<any>(this.usersUrl);
  }
  getUsersNo(): Observable<string> {
    return this.http.get<any>(this.usersUrl);
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

  getMessages(): Observable<string> {
    return this.http.get<any>(this.messagesUrl);
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