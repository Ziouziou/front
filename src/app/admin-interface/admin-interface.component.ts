import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent implements OnInit {

  username=sessionStorage.getItem('username');
  constructor(private  route:Router ) { }

  ngOnInit(): void {
  }

  logOut() {
    sessionStorage.setItem('username','');
    this.route.navigate([''])
  }

}
