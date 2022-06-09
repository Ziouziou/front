import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http:HttpClient)
  {

  }

  checkUser(email:string,password:string): Observable<any>
  {
    return  this.http.get('http://localhost:8080/user/checkUser',{params:{'email':email,'password':password}})
  }
  addUser(user:any):Observable<any>
  {
    return this.http.post('http://localhost:8080/user/addUser',user)
  }

}
