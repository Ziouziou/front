import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-data-visi-situation-c',
  templateUrl: './data-visi-situation-c.component.html',
  styleUrls: ['./data-visi-situation-c.component.css']
})
export class DataVisiSituationCComponent implements OnInit {

   value: any;
   layout: any
   marker: any;
  constructor(private http:HttpClient) { }

   data : any;

  ngOnInit(): void {
    this.createPieChart()

  }


  createPieChart()
  {
    this.http.get('http://localhost:8080/tier/getSeq').subscribe(value=>
    {
      this.value=value;
      this.data = [{
        type: 'bar',
        x: [this.value[0].value, this.value[1].value],
        y: ['Safe', 'Danger'],
        orientation: 'h',
        marker:{
          color: ['green', 'red']
        }
      }];

      this.layout = {
        height: 320,
        width: 350,
        title: {
          text:'Clients Situation <br>   Distribution ',
          font: {
            family: 'Courier New, monospace',
            size: 18
          },
          xref: 'paper',
          x: 0.05,
        },
        xaxis: {
          title: {
            text: 'Nombre de clients  ',
            font: {
              family: 'Courier New, monospace',
              size: 18,
              color: 'black'
            }
          }
        },
        yaxis: {
          title: {
            text: 'Situation  ',
            font: {
              family: 'Courier New, monospace',
              size: 17,
              color: 'black'
            }
          }
        }
      };

      console.log(value)})
  }
}
