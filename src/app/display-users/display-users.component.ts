import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  allusers:any;
  constructor(private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllUsers()
this.getCountAgente()
    this.getCountAnalyste()
  }



  getAllUsers()
  {
    this.http.get('http://localhost:8080/user/getAll').subscribe(value => {this.allusers=value;console.log(value)});
  }

  delete(id:number) {
    this.http.get('http://localhost:8080/user/deleteUser',{params:{'id':id}}).subscribe(value => {this.getAllUsers();});

  }
  agent:any;
  getCountAgente()
  {
    this.http.get('http://localhost:8080/user/getCountAgent').subscribe(value => {this.agent=value;console.log(value)})
  }
  analyste:any;
  getCountAnalyste()
  {
    this.http.get('http://localhost:8080/user/getCountAnalyste').subscribe(value => {this.analyste=value;console.log(value)})
  }


}
