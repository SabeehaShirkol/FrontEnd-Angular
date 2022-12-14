import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = "http://localhost:5000/users";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUsers() {
    return this.http.get(BASE_URL);
  }

  createUser(user: {firstname:string;lastname:string;age:number;Gender:string}){
    return this.http.post(BASE_URL, user);
  }
  constructor( public http :HttpClient) { }
}
