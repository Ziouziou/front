import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
const optionRequete = {
  headers: new HttpHeaders(
    {
      'Access-Control-Allow-Origin':'*',
    })
};
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})

export class EditUserComponent implements OnInit {

  saved:Object=false;
  edit:any;
  user:any;
  constructor(private fb:FormBuilder,private http:HttpClient,private router:ActivatedRoute) {
    this.edit= this.fb.group({
      name:['',Validators.required],
      email: ['', Validators.required],
      phoneNumber:['',Validators.required],
      password: ['', [Validators.required,Validators.min(8)]],
      role:['']

    });
  }


  ngOnInit(): void {
    this.getUser()
  }

  getUser()
  {
    let user=this.router.snapshot.params['i']
    console.log(user)
    this.http.get('http://localhost:8080/user/getOneUser',{params:{'user':user}}).subscribe(value => {this.user=value;console.log(value)})

  }
  save()
  {
    let user=this.router.snapshot.params['i']
    this.http.put('http://localhost:8080/user/modifier',this.edit.value,{params:{'userid':user}}).subscribe(value => {this.saved=value;console.log(value)})

  }
}

