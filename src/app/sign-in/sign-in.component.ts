import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css' ,'../../assets/externalCSS.css','../../assets/fonts/material-icon/css/material-design-iconic-font.min.css']
})
export class SignInComponent implements OnInit {

  //Form Objet
  signInForm;
  //test if Data Invalid
  invalidData=false;
  constructor(private fb:FormBuilder,private userService:UserService,private route:Router) {


   this.signInForm= this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.min(8)]]
    });
  }

  getControlers()
  {
    return this.signInForm.controls;
  }
  //checkData != null or incorrect
  checkData() {
    console.log(this.signInForm);
    if(this.signInForm.value.email == "adminstb@stb.tn" && this.signInForm.value.password=='admin')
    {
      this.route.navigate(['/AdminInterface']);

    }
    if (this.signInForm.dirty && this.signInForm.valid)
    {
      this.userService.checkUser(this.signInForm.value.email,this.signInForm.value.password).subscribe(
        value =>
                    {console.log(value);
                      if(value != null)
                      {
                       sessionStorage.setItem("username",value.name);
                       sessionStorage.setItem("role",value.role);
                       this.route.navigate(['/UserInterface']);

                      }
                      else
                      {
                        this.invalidData=true;
                      }

                    })
    }
    else
    {
    }

  }

  ngOnInit(): void {
  }

}
