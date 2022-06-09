import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css','../../assets/externalCSS.css']
})
export class CreateUserComponent implements OnInit {

  signUpForm:any;
  constructor(private fb:FormBuilder,private userService:UserService,private route:Router) {


    this.signUpForm= this.fb.group({
      name:['',Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.min(8)]],
      role:['']

    });
  }
  submit=false;
  checkControls(control:string)
  {
    if (this.signUpForm.controls[control].status== 'INVALID' && this.submit  )
    {
      return true;
    }
    else
    {
      return  false;
    }
  }
  ngOnInit(): void {
  }
  saved=false;
  addUser()
  {
    this.userService.addUser(this.signUpForm.value).subscribe(value => {this.saved=true;})
    console.log(this.signUpForm)
  }
}
