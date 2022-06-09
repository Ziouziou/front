import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {

 username=sessionStorage.getItem('username');
 role=sessionStorage.getItem('role');
  constructor(private  route:Router ) { }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.setItem('username','');
    this.route.navigate([''])
  }
}
