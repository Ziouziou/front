import { Component, OnInit } from '@angular/core';
import * as Plotly from 'plotly.js';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-data-visio',
  templateUrl: './data-visio.component.html',
  styleUrls: ['./data-visio.component.css']
})
export class DataVisioComponent implements OnInit {
   layout:any;
  data :any ;

  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
   this.createPieChart()
  }

  value:any;
  createPieChart()
  {
    this.http.get('http://localhost:8080/tier/getGender').subscribe(value=>
    {
      this.value=value;
      console.log(this.value[1].value)
      console.log(this.value[0].value)})
    this.data = [{
      values: [2,4],
      labels: ['Femme', 'Homme'],
      type: 'pie',
      borderRadius: 15,

    }];

    this.layout = {
      height: 320,
      width: 300,
      title: {
        text:'Gender Distribution',
        font: {
          family: 'Courier New, monospace',
          size: 18
        },
        xref: 'paper',
        x: 0.05,
      },
    };
  }
}
