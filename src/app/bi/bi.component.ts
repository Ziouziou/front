import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BiComponent implements OnInit {

  constructor(private http:HttpClient)
  {

  }

  ngOnInit(): void
  {
  }

  test()
      {

      }

}
